/**
 * Prep Cloud Functions — install dependencies for local dev
 *
 * Data is now stored in Cloud Storage (uploaded via scripts/upload-data.js).
 * Cloud functions are thin API wrappers — no bundled data, no redeploy for data changes.
 *
 * Usage:
 *   node scripts/upload-data.js      # Upload course data to Cloud Storage
 *
 * Then in WeChat DevTools:
 *   Right-click each cloud function → "Upload and Deploy" (first time only)
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const funcs = ['getCourses', 'getCourseDetail', 'getCategories', 'getCoaches'];

console.log('Cloud functions ready for deployment.');
console.log('');
console.log('Data is served from Cloud Storage — upload via:');
console.log('  node scripts/upload-data.js');
console.log('');
console.log('Deploy functions once (WeChat DevTools):');
funcs.forEach(f => {
  const hasIndex = fs.existsSync(path.join(ROOT, 'cloudfunctions', f, 'index.js'));
  console.log(`  ${hasIndex ? '✓' : '✗'} cloudfunctions/${f}`);
});
