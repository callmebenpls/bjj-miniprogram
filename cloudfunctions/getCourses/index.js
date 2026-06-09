// Cloud function: getCourses
// Returns course list with optional filtering (category, instructor, search query)
const cloud = require('wx-server-sdk');
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });

const { categories, courses } = require('./courses.json');

exports.main = async (event, context) => {
  const { q, category, instructor } = event;
  let result = courses;

  // Filter by category
  if (category) {
    result = result.filter(c => c.cat === category);
  }

  // Filter by instructor
  if (instructor) {
    result = result.filter(c => c.instructor === instructor);
  }

  // Full-text search across title, titleCn, instructor, cat
  if (q && q.trim()) {
    const query = q.toLowerCase().trim();
    result = result.filter(c =>
      c.title.toLowerCase().includes(query) ||
      c.titleCn.toLowerCase().includes(query) ||
      c.instructor.toLowerCase().includes(query) ||
      c.cat.includes(query)
    );
  }

  return {
    total: result.length,
    categories,
    courses: result
  };
};
