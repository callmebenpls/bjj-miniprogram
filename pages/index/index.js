Page({
  data: {
    categories: [],
    coachList: [],
    allCourses: [],
    allCount: 0,
    filteredCourses: [],
    curCat: 'all',
    curCoach: '',
    loading: true
  },

  onShareAppMessage() {
    return {
      title: '巴柔之家合集 · 顶尖教练系统教程',
      path: '/pages/index/index'
    };
  },

  onLoad() {
    this.loadData();
  },

  async loadData() {
    try {
      const [coursesRes, coachesRes] = await Promise.all([
        wx.cloud.callFunction({ name: 'getCourses' }),
        wx.cloud.callFunction({ name: 'getCoaches' })
      ]);

      const { categories, courses } = coursesRes.result;
      const { coaches } = coachesRes.result;

      // Resolve cloud image URLs
      await this.resolveImages(courses, coaches);

      this.setData({
        categories,
        coachList: coaches,
        allCourses: courses,
        allCount: courses.length,
        filteredCourses: courses,
        loading: false
      });
    } catch (err) {
      console.error('Load failed:', err);
      wx.showToast({ title: '加载失败', icon: 'none' });
      this.setData({ loading: false });
    }
  },

  async resolveImages(courses, coaches) {
    // Collect all cloud:// file IDs
    const cloudFileIDs = [];
    courses.forEach(c => { if (c.image && c.image.startsWith('cloud://')) cloudFileIDs.push(c.image); });
    coaches.forEach(c => { if (c.avatar && c.avatar.startsWith('cloud://')) cloudFileIDs.push(c.avatar); });

    if (!cloudFileIDs.length) return;

    // getTempFileURL max 50 per call — batch them
    const BATCH = 50;
    const resolved = {};
    for (let i = 0; i < cloudFileIDs.length; i += BATCH) {
      try {
        const res = await wx.cloud.getTempFileURL({
          fileList: cloudFileIDs.slice(i, i + BATCH)
        });
        (res.fileList || []).forEach(f => {
          if (f.tempFileURL) resolved[f.fileID] = f.tempFileURL;
        });
      } catch (e) {
        console.warn('Image batch failed:', i, e);
      }
    }

    // Apply resolved URLs, clear unresolved
    courses.forEach(c => {
      if (c.image && c.image.startsWith('cloud://')) {
        c.image = resolved[c.image] || '';
      }
    });
    coaches.forEach(c => {
      if (c.avatar && c.avatar.startsWith('cloud://')) {
        c.avatar = resolved[c.avatar] || '';
      }
    });
  },

  onSearch(e) {
    const q = e.detail.value.toLowerCase().trim();
    if (!q) { this.doFilter(); return; }
    const filtered = this.data.allCourses.filter(c =>
      c.title.toLowerCase().includes(q) ||
      c.titleCn.toLowerCase().includes(q) ||
      c.instructor.toLowerCase().includes(q) ||
      c.cat.includes(q)
    );
    this.setData({ filteredCourses: filtered });
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

  doFilter() {
    let filtered = this.data.allCourses;
    if (this.data.curCat !== 'all') {
      filtered = filtered.filter(c => c.cat === this.data.curCat);
    }
    if (this.data.curCoach) {
      filtered = filtered.filter(c => c.instructor === this.data.curCoach);
    }
    this.setData({
      filteredCourses: filtered,
      curCat: this.data.curCat,
      curCoach: this.data.curCoach
    });
  },

  openDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: '/pkgDetail/detail/detail?id=' + id });
  }
});
