// getCoaches — reads from Cloud Storage, coach avatars from data (no code redeploy needed)
const cloud = require('wx-server-sdk');
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });

const ENV = 'cloudbase-d2gjwgi5reb74969f';
const DATA_FILE = `cloud://${ENV}.636c-${ENV}-1441813913/data/courses.json`;
const CLOUD_BASE = `cloud://${ENV}.636c-${ENV}-1441813913`;

let _cache = null;
let _cacheTime = 0;
const CACHE_TTL = 5 * 60 * 1000;

exports.main = async (event, context) => {
  if (!_cache || Date.now() - _cacheTime > CACHE_TTL) {
    const res = await cloud.downloadFile({ fileID: DATA_FILE });
    _cache = JSON.parse(res.fileContent.toString());
    _cacheTime = Date.now();
  }

  const { courses, coachAvatars } = _cache;
  const avatars = coachAvatars || {};

  // Count courses per instructor (from instructors array)
  const counts = {};
  courses.forEach(c => {
    const insts = c.instructors || (c.instructor ? [c.instructor] : []);
    insts.forEach(name => {
      counts[name] = (counts[name] || 0) + 1;
    });
  });

  // Build coach list in the order defined in coachAvatars
  const coaches = Object.keys(avatars).map(name => {
    const parts = name.split(' ');
    return {
      name,
      initial: parts.map(w => w[0]).join(''),
      avatar: `${CLOUD_BASE}/images/coaches/${avatars[name]}`,
      lastName: parts[parts.length - 1],
      count: counts[name] || 0
    };
  });

  return { coaches };
};
