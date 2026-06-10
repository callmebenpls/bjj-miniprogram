// getCourses — fetches data from Cloud Storage (no redeploy needed for data changes)
// Also returns the coach list so the home page needs a single call.
const cloud = require('wx-server-sdk');
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });

const ENV = 'cloudbase-d2gjwgi5reb74969f';
const DATA_FILE = `cloud://${ENV}.636c-${ENV}-1441813913/data/courses.json`;
const CLOUD_BASE = `cloud://${ENV}.636c-${ENV}-1441813913`;

let _cache = null;
let _cacheTime = 0;
const CACHE_TTL = 5 * 60 * 1000;

function buildCoaches(courses, coachAvatars) {
  const avatars = coachAvatars || {};
  const counts = {};
  courses.forEach(c => {
    const insts = c.instructors || (c.instructor ? [c.instructor] : []);
    insts.forEach(name => { counts[name] = (counts[name] || 0) + 1; });
  });
  return Object.keys(avatars).map(name => {
    const parts = name.split(' ');
    return {
      name,
      initial: parts.map(w => w[0]).join(''),
      avatar: `${CLOUD_BASE}/images/coaches/${avatars[name]}`,
      lastName: parts[parts.length - 1],
      count: counts[name] || 0
    };
  });
}

exports.main = async (event, context) => {
  if (!_cache || Date.now() - _cacheTime > CACHE_TTL) {
    const res = await cloud.downloadFile({ fileID: DATA_FILE });
    _cache = JSON.parse(res.fileContent.toString());
    _cacheTime = Date.now();
  }

  const { config, appConfig, categories, courses, coachAvatars } = _cache;
  const { q, category, instructor } = event;
  let result = courses;

  if (category) result = result.filter(c => {
    const cats = c.cats || (c.cat ? [c.cat] : []);
    return cats.includes(category);
  });
  if (instructor) result = result.filter(c => {
    const insts = c.instructors || (c.instructor ? [c.instructor] : []);
    return insts.includes(instructor);
  });

  if (q && q.trim()) {
    const query = q.toLowerCase().trim();
    result = result.filter(c => {
      const cats = c.cats || (c.cat ? [c.cat] : []);
      const insts = c.instructors || (c.instructor ? [c.instructor] : []);
      return c.title.toLowerCase().includes(query) ||
        c.titleCn.toLowerCase().includes(query) ||
        insts.join(' ').toLowerCase().includes(query) ||
        cats.join(' ').includes(query);
    });
  }

  return {
    total: result.length,
    config: config || appConfig || {},
    categories,
    courses: result,
    coaches: buildCoaches(courses, coachAvatars)
  };
};
