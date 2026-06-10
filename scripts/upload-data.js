/**
 * Upload course data to Cloud Storage
 *
 * Run this whenever you add/update courses:
 *   node scripts/upload-data.js
 *
 * Reads credentials from .env (SecretId / SecretKey)
 */

const fs = require('fs');
const path = require('path');

// Read .env credentials
function loadEnv() {
  const envPath = path.join(__dirname, '..', '.env');
  if (!fs.existsSync(envPath)) {
    console.error('Missing .env file. Create it with:');
    console.error('SecretId:YOUR_ID');
    console.error('SecretKey:YOUR_KEY');
    process.exit(1);
  }
  const config = {};
  fs.readFileSync(envPath, 'utf-8').split('\n').forEach(line => {
    const m = line.match(/^(\w+):(.+)/);
    if (m) config[m[1]] = m[2].trim();
  });
  return config;
}

const env = loadEnv();

// Set env vars that CloudBase SDK reads
process.env.TENCENTCLOUD_SECRETID = env.SecretId;
process.env.TENCENTCLOUD_SECRETKEY = env.SecretKey;

const CloudBase = require('@cloudbase/manager-node');
const { appConfig, categories, courses, coachAvatars } = require('../data/courses.js');
const { details } = require('../pkgDetail/details.js');

const ENV_ID = 'cloudbase-d2gjwgi5reb74969f';
const CLOUD_BASE = `cloud://${ENV_ID}.636c-${ENV_ID}-1441813913`;

function toCloudPath(localPath) {
  if (!localPath) return localPath;
  return localPath.replace(/^\/images\//, `${CLOUD_BASE}/images/`);
}

(async () => {
  const app = CloudBase.init({ envId: ENV_ID });
  const storage = app.storage;

  courses.forEach(c => { c.image = toCloudPath(c.image); });
  Object.values(details).forEach(d => { d.image = toCloudPath(d.image); });

  // Upload courses.json
  const coursesData = JSON.stringify({ config: appConfig, categories, courses, coachAvatars });
  const coursesPath = path.join(__dirname, '..', '.tmp-courses.json');
  fs.writeFileSync(coursesPath, coursesData);
  console.log(`Uploading data/courses.json (${(fs.statSync(coursesPath).size / 1024).toFixed(1)} KB, ${courses.length} courses)...`);
  await storage.uploadFile({ localPath: coursesPath, cloudPath: 'data/courses.json' });
  fs.unlinkSync(coursesPath);
  console.log('  ✓ courses.json');

  // Upload details.json
  const detailsData = JSON.stringify(details);
  const detailsPath = path.join(__dirname, '..', '.tmp-details.json');
  fs.writeFileSync(detailsPath, detailsData);
  console.log(`Uploading data/details.json (${(fs.statSync(detailsPath).size / 1024).toFixed(1)} KB, ${Object.keys(details).length} courses)...`);
  await storage.uploadFile({ localPath: detailsPath, cloudPath: 'data/details.json' });
  fs.unlinkSync(detailsPath);
  console.log('  ✓ details.json');

  console.log('\nDone! Mini program will update within 5 minutes.');
})();
