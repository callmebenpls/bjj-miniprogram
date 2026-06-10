/**
 * Shared signed-URL cache, keyed by cloud file ID.
 *
 * getTempFileURL returns a different signed URL every call, which busts the
 * on-device image cache and makes <image> re-download (visible flash).
 * Reusing one URL for its validity window keeps src stable and cuts calls.
 */
const KEY = 'img_url_cache';
const TTL = 90 * 60 * 1000; // temp URLs are valid ~2h; reuse for 90 min
const BATCH = 50;

let mem = null;

function load() {
  if (!mem) {
    try { mem = wx.getStorageSync(KEY) || {}; } catch (e) { mem = {}; }
  }
  return mem;
}

// fileIds: array of cloud:// IDs → resolves to { fileID: url } for all
// IDs with a currently-valid URL (cached or freshly signed)
async function resolve(fileIds) {
  const map = load();
  const now = Date.now();
  const need = [...new Set(fileIds)].filter(id => {
    const e = map[id];
    return !(e && now - e.t < TTL);
  });

  if (need.length > 0) {
    const batches = [];
    for (let i = 0; i < need.length; i += BATCH) batches.push(need.slice(i, i + BATCH));
    const results = await Promise.all(batches.map(b =>
      wx.cloud.getTempFileURL({ fileList: b }).catch(() => ({ fileList: [] }))
    ));
    results.forEach(r => (r.fileList || []).forEach(f => {
      if (f.tempFileURL) map[f.fileID] = { url: f.tempFileURL, t: now };
    }));
    Object.keys(map).forEach(id => {           // prune expired entries
      if (now - map[id].t >= TTL) delete map[id];
    });
    try { wx.setStorageSync(KEY, map); } catch (e) { /* storage full — skip */ }
  }

  const out = {};
  fileIds.forEach(id => {
    const e = map[id];
    if (e && now - e.t < TTL) out[id] = e.url;
  });
  return out;
}

module.exports = { resolve };
