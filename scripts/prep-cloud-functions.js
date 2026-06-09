/**
 * Prep Cloud Functions — Copy data into cloud function directories
 * 
 * Run this BEFORE deploying cloud functions in WeChat DevTools:
 *   node scripts/prep-cloud-functions.js
 * 
 * Then in WeChat DevTools:
 *   Right-click each cloud function → "Upload and Deploy"
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const ENV_ID = 'cloudbase-d2gjwgi5reb74969f';
const CLOUD_BASE = `cloud://${ENV_ID}.636c-${ENV_ID}`;

// Convert local image paths to Cloud Storage file IDs
function toCloudPath(localPath) {
  if (!localPath) return localPath;
  return localPath.replace(/^\/images\//, `${CLOUD_BASE}/images/`);
}

// Step 1: Generate courses.json for getCourses, getCategories, getCoaches
console.log('Reading data/courses.js ...');
const { categories, courses } = require('../data/courses.js');

// Convert image paths to cloud:// format
courses.forEach(c => { c.image = toCloudPath(c.image); });
const coursesJSON = JSON.stringify({ categories, courses }, null, 2);

const coursesTargets = ['getCourses', 'getCategories', 'getCoaches'];
coursesTargets.forEach(funcName => {
  const dest = path.join(ROOT, 'cloudfunctions', funcName, 'courses.json');
  fs.writeFileSync(dest, coursesJSON, 'utf-8');
  console.log(`  ✓ ${funcName}/courses.json (${(fs.statSync(dest).size / 1024).toFixed(1)} KB)`);
});

// Step 2: Generate details.json for getCourseDetail
console.log('Reading pkgDetail/details.js ...');
const { details } = require('../pkgDetail/details.js');

// Convert image paths in detail data too
Object.values(details).forEach(d => { d.image = toCloudPath(d.image); });
const detailsJSON = JSON.stringify(details); // minified for cloud function size limits
const dest = path.join(ROOT, 'cloudfunctions', 'getCourseDetail', 'details.json');
fs.writeFileSync(dest, detailsJSON, 'utf-8');
console.log(`  ✓ getCourseDetail/details.json (${(fs.statSync(dest).size / 1024).toFixed(1)} KB)`);
console.log(`  — ${Object.keys(details).length} courses`);

console.log(`\nAll image paths → ${CLOUD_BASE}/images/`);
console.log('\nDone! Cloud function data is ready.');
