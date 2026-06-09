Page({
  data: {
    course: null,
    loading: true
  },

  onLoad(options) {
    if (!options.id) {
      this.setData({ loading: false });
      return;
    }
    this.loadDetail(options.id);
  },

  async loadDetail(id) {
    try {
      const res = await wx.cloud.callFunction({
        name: 'getCourseDetail',
        data: { id }
      });

      const course = res.result.course;
      if (!course) {
        wx.showToast({ title: '课程未找到', icon: 'none' });
        this.setData({ loading: false });
        return;
      }

      // Resolve cover image (only cloud:// paths, local /images/... work directly)
      if (course.image && course.image.startsWith('cloud://')) {
        try {
          const imgRes = await wx.cloud.getTempFileURL({
            fileList: [course.image]
          });
          course.image = imgRes.fileList[0]?.tempFileURL || '';
        } catch (e) {
          course.image = ''; // clear unresolved cloud:// path
        }
      }

      this.setData({ course, loading: false });
    } catch (err) {
      console.error('Load detail failed:', err);
      wx.showToast({ title: '加载失败', icon: 'none' });
      this.setData({ loading: false });
    }
  },

  goBack() {
    wx.navigateBack();
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
