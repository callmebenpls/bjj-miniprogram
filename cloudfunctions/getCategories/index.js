// getCategories — reads from Cloud Storage
const cloud = require('wx-server-sdk');
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });

const ENV = 'cloudbase-d2gjwgi5reb74969f';
const DATA_FILE = `cloud://${ENV}.636c-${ENV}-1441813913/data/courses.json`;

let _cache = null;
let _cacheTime = 0;
const CACHE_TTL = 5 * 60 * 1000;

exports.main = async (event, context) => {
  if (!_cache || Date.now() - _cacheTime > CACHE_TTL) {
    const res = await cloud.downloadFile({ fileID: DATA_FILE });
    _cache = JSON.parse(res.fileContent.toString());
    _cacheTime = Date.now();
  }

  return { categories: _cache.categories };
};
