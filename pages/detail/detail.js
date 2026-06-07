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
  }
});
