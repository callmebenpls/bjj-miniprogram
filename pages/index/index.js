const CACHE_KEY = 'home_cache_v1';
// Temp file URLs are valid ~2h; trust cached ones for 90 min
const IMG_TTL = 90 * 60 * 1000;

Page({
  data: {
    config: {},
    categories: [],
    coachList: [],
    allCourses: [],
    allCount: 0,
    filteredCourses: [],
    curCat: 'all',
    curCoach: '',
    curBadge: '',
    query: '',
    searchFocus: false,
    navTop: 48,
    navHeight: 32,
    loading: true
  },

  onSearchFocus() {
    this.setData({ searchFocus: true });
  },

  onSearchBlur() {
    this.setData({ searchFocus: false });
  },

  onShareAppMessage() {
    const title = (this.data.config.home && this.data.config.home.title) || '巴柔之家';
    return { title: title + '合集 · 顶尖教练系统教程', path: '/pages/index/index' };
  },

  onLoad() {
    // Align the header with the capsule button — env(safe-area-inset-top)
    // is unreliable in mini programs, so measure instead.
    try {
      const menu = wx.getMenuButtonBoundingClientRect();
      const win = wx.getWindowInfo ? wx.getWindowInfo() : wx.getSystemInfoSync();
      this.setData({
        navTop: (menu && menu.top) || (win.statusBarHeight || 24) + 4,
        navHeight: (menu && menu.height) || 32
      });
    } catch (e) { /* keep defaults */ }

    // Cache-first: paint the last known data instantly, then refresh
    const cached = this.readCache();
    if (cached) this.applyData(cached);
    this.loadData(!!cached);
  },

  readCache() {
    try {
      const c = wx.getStorageSync(CACHE_KEY);
      if (!c || !c.courses || !c.courses.length) return null;
      if (Date.now() - c.t > IMG_TTL) {
        // temp URLs likely expired — drop them so cards show placeholders
        // until the background refresh brings fresh ones
        c.courses.forEach(x => { if (x.image && x.image.startsWith('http')) x.image = ''; });
        (c.coaches || []).forEach(x => { if (x.avatar && x.avatar.startsWith('http')) x.avatar = ''; });
      }
      return c;
    } catch (e) { return null; }
  },

  applyData({ config, categories, coaches, courses }) {
    this.setData({
      config: config || {},
      categories,
      coachList: coaches,
      allCourses: courses,
      allCount: courses.length,
      loading: false
    });
    this.doFilter(); // re-applies any active search/filters on refresh
  },

  async loadData(silent) {
    try {
      const coursesRes = await wx.cloud.callFunction({ name: 'getCourses' });
      const { config, categories, courses } = coursesRes.result;

      // getCourses now returns coaches too (saves one call);
      // fall back to getCoaches if the deployed function is the old version
      let coaches = coursesRes.result.coaches;
      if (!coaches) {
        const coachesRes = await wx.cloud.callFunction({ name: 'getCoaches' });
        coaches = coachesRes.result.coaches;
      }

      this.decorate(courses, config);
      await this.resolveImages(courses, coaches);

      const payload = { config: config || {}, categories, coaches, courses };
      this.applyData(payload);
      try { wx.setStorageSync(CACHE_KEY, { t: Date.now(), ...payload }); } catch (e) { /* storage full — skip */ }
    } catch (err) {
      console.error('Load failed:', err);
      if (!silent) {
        wx.showToast({ title: '加载失败', icon: 'none' });
        this.setData({ loading: false });
      }
    }
  },

  // Precompute display fields WXML can't express (no method calls in bindings)
  decorate(courses, config) {
    const badges = (config && config.home && config.home.badges) || [];
    courses.forEach(c => {
      const cats = c.cats || (c.cat ? [c.cat] : []);
      const insts = c.instructors || (c.instructor ? [c.instructor] : []);
      c.catText = cats.join(' / ');
      c.coachText = insts.join(' & ');
      c.badgeIcons = badges
        .filter(b => b.showOnList && (c.badges || []).indexOf(b.id) >= 0)
        .map(b => b.icon);
    });
  },

  async resolveImages(courses, coaches) {
    const cloudFileIDs = [];
    courses.forEach(c => { if (c.image && c.image.startsWith('cloud://')) cloudFileIDs.push(c.image); });
    coaches.forEach(c => { if (c.avatar && c.avatar.startsWith('cloud://')) cloudFileIDs.push(c.avatar); });
    if (!cloudFileIDs.length) return;

    const BATCH = 50;
    const batches = [];
    for (let i = 0; i < cloudFileIDs.length; i += BATCH) {
      batches.push(cloudFileIDs.slice(i, i + BATCH));
    }
    const resolved = {};
    // resolve all batches in parallel — was serial, ~4x slower
    const results = await Promise.all(batches.map(b =>
      wx.cloud.getTempFileURL({ fileList: b }).catch(e => {
        console.warn('Image batch failed:', e);
        return { fileList: [] };
      })
    ));
    results.forEach(res => (res.fileList || []).forEach(f => {
      if (f.tempFileURL) resolved[f.fileID] = f.tempFileURL;
    }));

    courses.forEach(c => { if (c.image && c.image.startsWith('cloud://')) c.image = resolved[c.image] || ''; });
    coaches.forEach(c => { if (c.avatar && c.avatar.startsWith('cloud://')) c.avatar = resolved[c.avatar] || ''; });
  },

  onSearch(e) {
    this.data.query = e.detail.value.toLowerCase().trim();
    this.doFilter();
  },

  setCat(e) {
    this.data.curCat = e.currentTarget.dataset.cat;
    this.doFilter();
  },

  setCoach(e) {
    const name = e.currentTarget.dataset.name;
    this.data.curCoach = this.data.curCoach === name ? '' : name;
    this.doFilter();
  },

  setBadge(e) {
    const id = e.currentTarget.dataset.badge;
    this.data.curBadge = this.data.curBadge === id ? '' : id;
    this.doFilter();
  },

  // Single filter pass: search query + category + coach + badge all compose
  doFilter() {
    const { curCat, curCoach, curBadge, query } = this.data;
    let filtered = this.data.allCourses;
    if (curCat !== 'all') {
      filtered = filtered.filter(c => (c.cats || []).includes(curCat));
    }
    if (curCoach) {
      filtered = filtered.filter(c => (c.instructors || []).includes(curCoach));
    }
    if (curBadge) {
      filtered = filtered.filter(c => (c.badges || []).includes(curBadge));
    }
    if (query) {
      filtered = filtered.filter(c =>
        c.title.toLowerCase().includes(query) ||
        (c.titleCn || '').toLowerCase().includes(query) ||
        (c.instructors || []).join(' ').toLowerCase().includes(query) ||
        (c.cats || []).join(' ').includes(query)
      );
    }
    this.setData({ filteredCourses: filtered, curCat, curCoach, curBadge });
  },

  openDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: '/pkgDetail/detail/detail?id=' + id });
  }
});
