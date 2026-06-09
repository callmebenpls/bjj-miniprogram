// Cloud function: getCoaches
// Returns 5 elite BJJ coaches with avatar paths and course counts
const cloud = require('wx-server-sdk');
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });

const { courses } = require('./courses.json');

const ENV = 'cloudbase-d2gjwgi5reb74969f';
const CLOUD_BASE = `cloud://${ENV}.636c-${ENV}`;

// Coach avatar file names
const COACH_AVATARS = {
  'John Danaher': 'danaher.jpg',
  'Gordon Ryan': 'gordon.jpg',
  'Mikey Musumeci': 'mikey.jpg',
  'Craig Jones': 'craig.jpg',
  'Lachlan Giles': 'lachlan.jpg'
};

exports.main = async (event, context) => {
  const map = {};
  courses.forEach(c => {
    if (!map[c.instructor]) map[c.instructor] = [];
    map[c.instructor].push(c);
  });

  const coaches = Object.keys(map).map(name => {
    const parts = name.split(' ');
    return {
      name,
      initial: parts.map(w => w[0]).join(''),
      avatar: COACH_AVATARS[name] ? `${CLOUD_BASE}/images/coaches/${COACH_AVATARS[name]}` : '',
      lastName: parts[parts.length - 1],
      count: map[name].length
    };
  }).sort((a, b) => a.lastName.localeCompare(b.lastName));

  return { coaches };
};
