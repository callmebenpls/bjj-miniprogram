const imgUrls = require('../../img-urls.js');

// Temp file URLs are valid ~2h; trust cached ones for 90 min
const IMG_TTL = 90 * 60 * 1000;
// Without a version match, trust cached detail data this long
const DETAIL_TTL = 6 * 60 * 60 * 1000;
const CACHE_PREFIX = 'detail_';
const CACHE_INDEX = 'detail_cache_idx';
const CACHE_MAX = 40;

Page({
  data: {
    course: null,
    config: {},
    navTop: 48,
    pendingCover: '',
    loading: true
  },

  onLoad(options) {
    try {
      const menu = wx.getMenuButtonBoundingClientRect();
      const win = wx.getWindowInfo ? wx.getWindowInfo() : wx.getSystemInfoSync();
      this.setData({ navTop: (menu && menu.top) || (win.statusBarHeight || 24) + 4 });
    } catch (e) { /* keep default */ }
    if (!options.id) {
      this.setData({ loading: false });
      return;
    }

    // Cache-first: revisits paint instantly from storage
    const cached = this.readCache(options.id);
    if (cached) {
      this.setData({ course: cached.course, config: cached.config, loading: false });
      // If the cached data is still the current deploy version (or young
      // enough), skip the cloud call — just re-sign expired image URLs.
      const appVer = (getApp().globalData || {}).dataVersion;
      const current = (cached.v && appVer && cached.v === appVer) ||
                      (Date.now() - cached.t < DETAIL_TTL);
      if (current) {
        this.resolveCachedImages(options.id, cached);
        return;
      }
    } else {
      // First visit: seed header/cover from the list item the user tapped,
      // so something meaningful shows while the full detail loads
      const seed = (getApp().globalData || {}).seedCourse;
      if (seed && seed.id === options.id) {
        this.setData({
          course: {
            id: seed.id, title: seed.title, titleCn: seed.titleCn,
            coachText: seed.coachText, badgeIcons: [],
            image: seed.image && seed.image.startsWith('http') ? seed.image : '',
            desc: '', blocksTop: [], blocksMid: [], blocksBottom: []
          },
          loading: false
        });
      }
    }
    this.loadDetail(options.id, !!cached);
  },

  readCache(id) {
    try {
      const c = wx.getStorageSync(CACHE_PREFIX + id);
      if (!c || !c.course) return null;
      if (Date.now() - (c.imgT || c.t) > IMG_TTL) this.stripImages(c.course);
      return c;
    } catch (e) { return null; }
  },

  // Cached data is current but its signed image URLs may have expired —
  // re-sign just those (no cloud function call)
  async resolveCachedImages(id, cached) {
    const course = cached.course;
    const ids = [];
    if (course._coverId && !course.image) ids.push(course._coverId);
    ['blocks', 'blocksTop', 'blocksMid', 'blocksBottom'].forEach(k => {
      (course[k] || []).forEach(b => { if (b._srcId && !b.src) ids.push(b._srcId); });
    });
    if (ids.length === 0) return;
    try {
      const map = await imgUrls.resolve(ids);
      if (course._coverId && map[course._coverId]) course.image = map[course._coverId];
      ['blocks', 'blocksTop', 'blocksMid', 'blocksBottom'].forEach(k => {
        (course[k] || []).forEach(b => { if (b._srcId && map[b._srcId]) b.src = map[b._srcId]; });
      });
      this.setData({ course });
      try {
        wx.setStorageSync(CACHE_PREFIX + id, { ...cached, imgT: Date.now(), course });
      } catch (e) { /* skip */ }
    } catch (e) { /* placeholders stay */ }
  },

  stripImages(course) {
    if (course.image && course.image.startsWith('http')) course.image = '';
    ['blocks', 'blocksTop', 'blocksMid', 'blocksBottom'].forEach(k => {
      (course[k] || []).forEach(b => {
        if (b.type === 'image' && b.src && b.src.startsWith('http')) b.src = '';
      });
    });
  },

  writeCache(id, course, config) {
    try {
      wx.setStorageSync(CACHE_PREFIX + id, {
        t: Date.now(), imgT: Date.now(), v: (config && config._v) || '', course, config
      });
      let idx = wx.getStorageSync(CACHE_INDEX) || [];
      idx = idx.filter(x => x !== id);
      idx.push(id);
      while (idx.length > CACHE_MAX) {
        wx.removeStorageSync(CACHE_PREFIX + idx.shift());
      }
      wx.setStorageSync(CACHE_INDEX, idx);
    } catch (e) { /* storage full — skip */ }
  },

  async loadDetail(id, silent) {
    try {
      const res = await wx.cloud.callFunction({
        name: 'getCourseDetail',
        data: { id }
      });

      const course = res.result.course;
      const config = res.result.config || {};
      if (!course) {
        if (!silent) {
          wx.showToast({ title: '课程未找到', icon: 'none' });
          this.setData({ loading: false });
        }
        return;
      }

      // Precompute fields WXML can't express (no method calls in bindings)
      const insts = course.instructors || (course.instructor ? [course.instructor] : []);
      course.coachText = insts.join(' & ');
      const badges = (config.home && config.home.badges) || [];
      course.badgeIcons = badges
        .filter(b => b.showOnDetail && (course.badges || []).indexOf(b.id) >= 0)
        .map(b => b.icon);

      // Slot blocks by optional position field: top (above description),
      // bottom (below chapters), default (between description and share)
      const blocks = course.blocks || [];
      course.blocksTop = blocks.filter(b => b.position === 'top');
      course.blocksMid = blocks.filter(b => b.position !== 'top' && b.position !== 'bottom');
      course.blocksBottom = blocks.filter(b => b.position === 'bottom');

      // Paint all text content NOW; images resolve in the background below.
      // Until then keep whatever is already on screen (seeded thumb / cached).
      const cloudIds = [];
      if (course.image && course.image.startsWith('cloud://')) {
        cloudIds.push(course.image);
        course._coverId = course.image;
        course.image = (this.data.course && this.data.course.image) || '';
      }
      blocks.forEach(b => {
        if (b.type === 'image' && b.src && b.src.startsWith('cloud://')) {
          cloudIds.push(b.src);
          b._srcId = b.src;
          b.src = '';
        }
      });
      this.setData({ course, config, loading: false });

      if (cloudIds.length > 0) {
        try {
          const map = await imgUrls.resolve(cloudIds);
          blocks.forEach(b => { if (b._srcId) b.src = map[b._srcId] || ''; });
          const displayed = course.image;
          const finalCover = course._coverId ? (map[course._coverId] || '') : displayed;
          if (!displayed || displayed === finalCover) {
            // nothing on screen (or same URL) — set directly
            course.image = finalCover;
            this.setData({ course });
          } else {
            // an image (seeded thumb / older URL) is visible — preload the
            // real cover off-screen and swap only once it has loaded
            this.setData({ course, pendingCover: finalCover });
          }
          // cache always stores the final cover, never the seeded thumb
          this.writeCache(id, { ...course, image: finalCover }, config);
          return;
        } catch (e) { /* placeholders stay */ }
      }
      this.writeCache(id, course, config);
    } catch (err) {
      console.error('Load detail failed:', err);
      if (!silent) {
        wx.showToast({ title: '加载失败', icon: 'none' });
        this.setData({ loading: false });
      }
    }
  },

  goBack() {
    wx.navigateBack();
  },

  // The off-screen preloader finished — swap the cover with no blank frame
  onCoverLoaded() {
    const url = this.data.pendingCover;
    if (!url) return;
    this.setData({ 'course.image': url, pendingCover: '' });
  },

  onBlockButton(e) {
    const { action, value } = e.currentTarget.dataset;
    if (action === 'copy' && value) {
      wx.setClipboardData({
        data: value,
        success: () => wx.showToast({ title: '已复制到剪贴板', icon: 'none' })
      });
    }
  },

  onShareAppMessage() {
    const c = this.data.course || {};
    return {
      title: c.titleCn || c.title || '巴柔之家',
      path: '/pkgDetail/detail/detail?id=' + (c.id || ''),
      imageUrl: c.image || ''
    };
  },

  onShareTimeline() {
    const c = this.data.course || {};
    return {
      title: c.titleCn || c.title || '巴柔之家',
      query: 'id=' + (c.id || ''),
      imageUrl: c.image || ''
    };
  }
});
