const TITLE_FONT = 'cloud://cloudbase-d2gjwgi5reb74969f.636c-cloudbase-d2gjwgi5reb74969f-1441813913/fonts/bjj-title.ttf';

App({
  onLaunch() {
    if (wx.cloud) {
      wx.cloud.init({
        env: wx.cloud.DYNAMIC_CURRENT_ENV,
        traceUser: true
      });
      this.loadTitleFont();
    }
  },

  // Subset serif font (only the 巴柔之家 glyphs, ~3KB) so the title renders
  // identically on Android, which ships no Chinese serif. Failure is fine —
  // CSS falls back to Songti SC / system sans.
  async loadTitleFont() {
    try {
      const res = await wx.cloud.getTempFileURL({ fileList: [TITLE_FONT] });
      const url = res.fileList[0] && res.fileList[0].tempFileURL;
      if (!url) return;
      wx.loadFontFace({
        family: 'BJJTitle',
        source: `url("${url}")`,
        global: true,
        scopes: ['webview', 'native']
      });
    } catch (e) { /* fall back to system fonts */ }
  }
});
