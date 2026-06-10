// getCourseDetail — fetches from Cloud Storage (no redeploy for data changes)
// Returns course + appearance config for dynamic styling
const cloud = require('wx-server-sdk');
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });

const ENV = 'cloudbase-d2gjwgi5reb74969f';
const DETAILS_FILE = `cloud://${ENV}.636c-${ENV}-1441813913/data/details.json`;
const COURSES_FILE = `cloud://${ENV}.636c-${ENV}-1441813913/data/courses.json`;

let _cache = null, _configCache = null;
let _cacheTime = 0, _configTime = 0;
const CACHE_TTL = 15 * 60 * 1000;

exports.main = async (event, context) => {
  if (!_cache || Date.now() - _cacheTime > CACHE_TTL) {
    const res = await cloud.downloadFile({ fileID: DETAILS_FILE });
    _cache = JSON.parse(res.fileContent.toString());
    _cacheTime = Date.now();
  }
  if (!_configCache || Date.now() - _configTime > CACHE_TTL) {
    const res = await cloud.downloadFile({ fileID: COURSES_FILE });
    _configCache = JSON.parse(res.fileContent.toString());
    _configTime = Date.now();
  }

  const course = _cache[event.id];
  if (!course) return { error: 'Course not found' };
  return { course, config: (_configCache.config || _configCache.appConfig || {}) };
};
