const { TITLE_FONT_B64 } = require('./title-font.js');

App({
  onLaunch() {
    if (wx.cloud) {
      wx.cloud.init({
        env: wx.cloud.DYNAMIC_CURRENT_ENV,
        traceUser: true
      });
    }
    this.loadTitleFont();
  },

  // Subset serif font (only the 巴柔之家 glyphs, ~3KB) embedded as base64 so
  // the title renders identically on Android (which ships no Chinese serif)
  // with no font-swap flash. Failure is fine — CSS falls back to Songti SC.
  loadTitleFont() {
    try {
      wx.loadFontFace({
        family: 'BJJTitle',
        source: `url("data:font/ttf;base64,${TITLE_FONT_B64}")`,
        global: true,
        scopes: ['webview', 'native']
      });
    } catch (e) { /* fall back to system fonts */ }
  }
});
