const { details } = require('../../data/details');

Page({
  data: {
    course: null
  },

  onLoad(options) {
    const course = details[options.id];
    if (course) {
      this.setData({ course });
    }
  },

  goBack() {
    wx.navigateBack();
  },

  // Share a specific course to a friend / group chat
  onShareAppMessage() {
    const c = this.data.course || {};
    return {
      title: c.titleCn || c.title || '巴柔之家',
      path: '/pages/detail/detail?id=' + (c.id || ''),
      imageUrl: c.image || ''
    };
  },

  // Share to Moments / 朋友圈 (Android)
  onShareTimeline() {
    const c = this.data.course || {};
    return {
      title: c.titleCn || c.title || '巴柔之家',
      query: 'id=' + (c.id || ''),
      imageUrl: c.image || ''
    };
  }
});
