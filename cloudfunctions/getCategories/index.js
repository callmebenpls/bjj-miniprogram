// Cloud function: getCategories
// Returns all 20 BJJ categories
const cloud = require('wx-server-sdk');
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });

const { categories } = require('./courses.json');

exports.main = async (event, context) => {
  return { categories };
};
