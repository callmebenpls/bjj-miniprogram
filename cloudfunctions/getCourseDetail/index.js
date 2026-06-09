// Cloud function: getCourseDetail
// Returns full course detail (title, description, chapter list with timestamps)
const cloud = require('wx-server-sdk');
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });

const details = require('./details.json');

exports.main = async (event, context) => {
  const { id } = event;
  const course = details[id];

  if (!course) {
    return { error: 'Course not found' };
  }

  return { course };
};
