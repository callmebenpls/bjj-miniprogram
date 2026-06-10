/**
 * Admin Server — Manage courses, categories, coaches via browser
 *
 * Start:  node admin-server.js
 * Open:   http://localhost:3456
 *
 * Edit in browser → saves to local files (data/courses.js + pkgDetail/details.js,
 * kept in sync). Click "Deploy to Cloud" → uploads directly to Cloud Storage.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const PORT = 3456;
const ENV = 'cloudbase-d2gjwgi5reb74969f';
const CLOUD_BASE = `cloud://${ENV}.636c-${ENV}-1441813913`;

function toCloudPath(localPath) {
  if (!localPath) return localPath;
  if (localPath.startsWith('cloud://') || localPath.startsWith('http')) return localPath;
  if (localPath.startsWith('/images/')) return localPath.replace('/images/', `${CLOUD_BASE}/images/`);
  return `${CLOUD_BASE}/images/covers/${localPath}`;
}

// Load data from source files
function loadData() {
  delete require.cache[require.resolve(path.join(ROOT, 'data', 'courses.js'))];
  const { appConfig, categories, courses, coachAvatars } = require(path.join(ROOT, 'data', 'courses.js'));
  delete require.cache[require.resolve(path.join(ROOT, 'pkgDetail', 'details.js'))];
  const { details } = require(path.join(ROOT, 'pkgDetail', 'details.js'));
  return { appConfig: appConfig || {}, categories, courses, coachAvatars: coachAvatars || {}, details };
}

// Save courses.js (reconstruct the JS file)
function saveCoursesJS(data) {
  const { appConfig, categories, courses, coachAvatars } = data;
  const content = `const appConfig = ${JSON.stringify(appConfig || {})};\n` +
    `const categories = ${JSON.stringify(categories)};\n` +
    `const coachAvatars = ${JSON.stringify(coachAvatars)};\n` +
    `const courses = ${JSON.stringify(courses)};\n` +
    `module.exports = { appConfig, categories, courses, coachAvatars };\n`;
  fs.writeFileSync(path.join(ROOT, 'data', 'courses.js'), content, 'utf-8');
}

// Save details.js
function saveDetailsJS(details) {
  const content = `const details = ${JSON.stringify(details)};\nmodule.exports = { details };\n`;
  fs.writeFileSync(path.join(ROOT, 'pkgDetail', 'details.js'), content, 'utf-8');
}

// Keep details.js in sync with list-level edits (shared fields only).
// The list (data/courses.js) is the source of truth for these.
function syncDetailsFromCourses(courses, details) {
  let changed = false;
  courses.forEach(c => {
    const d = details[c.id];
    if (!d) return;
    ['title', 'titleCn', 'cats', 'instructors', 'badges'].forEach(k => {
      if (JSON.stringify(d[k]) !== JSON.stringify(c[k])) { d[k] = c[k]; changed = true; }
    });
  });
  return changed;
}

// Generate JSON for cloud upload
function genCloudJSON() {
  const { appConfig, categories, courses, coachAvatars, details } = loadData();
  const _courses = courses.map(c => ({ ...c, image: toCloudPath(c.image) }));
  const _details = {};
  Object.keys(details).forEach(k => {
    _details[k] = { ...details[k], image: toCloudPath(details[k].image) };
  });
  return {
    coursesJSON: JSON.stringify({ config: appConfig, categories, courses: _courses, coachAvatars }),
    detailsJSON: JSON.stringify(_details)
  };
}

function sendJSON(res, code, obj) {
  res.writeHead(code, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(obj));
}

function readBody(req) {
  return new Promise(resolve => {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => resolve(body));
  });
}

// Parse the body as JSON and run the handler; malformed JSON or handler
// errors return a 500 instead of hanging the request.
function withBody(req, res, fn) {
  readBody(req).then(body => {
    try {
      fn(JSON.parse(body || '{}'));
    } catch (e) {
      sendJSON(res, 500, { error: e.message });
    }
  });
}

// Simple JSON API
function handleAPI(req, res) {
  const url = new URL(req.url, 'http://localhost');
  const pathname = url.pathname;

  if (req.method === 'OPTIONS') { res.writeHead(200); res.end(); return; }

  try {
    // GET /api/data — Load all data
    if (pathname === '/api/data' && req.method === 'GET') {
      const { appConfig, categories, courses, coachAvatars, details } = loadData();
      sendJSON(res, 200, { appConfig, categories, courses, coachAvatars, details: Object.keys(details).length });
      return;
    }

    // GET /api/data/courses — Courses only
    if (pathname === '/api/data/courses' && req.method === 'GET') {
      const { categories, courses, coachAvatars } = loadData();
      sendJSON(res, 200, { categories, courses, coachAvatars });
      return;
    }

    // GET /api/data/details/:id — Single course detail
    if (pathname.startsWith('/api/data/details/') && req.method === 'GET') {
      const id = pathname.split('/api/data/details/')[1];
      const { details } = loadData();
      sendJSON(res, 200, details[id] || { error: 'not found' });
      return;
    }

    // POST /api/data/courses/save — Save course changes (details kept in sync)
    if (pathname === '/api/data/courses/save' && req.method === 'POST') {
      withBody(req, res, data => {
        const { details } = loadData();
        saveCoursesJS({ appConfig: data.appConfig || {}, categories: data.categories, courses: data.courses, coachAvatars: data.coachAvatars });
        if (syncDetailsFromCourses(data.courses, details)) saveDetailsJS(details);
        sendJSON(res, 200, { ok: true });
      });
      return;
    }

    // POST /api/data/categories — Add/remove/rename category (cascades to courses + details)
    if (pathname === '/api/data/categories' && req.method === 'POST') {
      withBody(req, res, ({ action, name, newName }) => {
        const { appConfig, categories, courses, coachAvatars, details } = loadData();
        if (action === 'add' && !categories.includes(name)) {
          categories.push(name);
        } else if (action === 'remove') {
          const idx = categories.indexOf(name);
          if (idx >= 0) categories.splice(idx, 1);
          courses.forEach(c => { if (c.cats) c.cats = c.cats.filter(x => x !== name); });
        } else if (action === 'rename' && newName) {
          const idx = categories.indexOf(name);
          if (idx >= 0) categories[idx] = newName;
          courses.forEach(c => {
            if (c.cats) {
              const ci = c.cats.indexOf(name);
              if (ci >= 0) c.cats[ci] = newName;
            }
          });
        }
        saveCoursesJS({ appConfig, categories, courses, coachAvatars });
        if (syncDetailsFromCourses(courses, details)) saveDetailsJS(details);
        sendJSON(res, 200, { ok: true, categories });
      });
      return;
    }

    // POST /api/data/coaches — Save coach avatar / rename / remove (cascades to courses + details)
    if (pathname === '/api/data/coaches' && req.method === 'POST') {
      withBody(req, res, ({ name, avatar, action, newName }) => {
        const { appConfig, categories, courses, coachAvatars, details } = loadData();
        if (action === 'remove') {
          delete coachAvatars[name];
        } else if (action === 'rename' && newName && newName !== name) {
          coachAvatars[newName] = coachAvatars[name] || '';
          delete coachAvatars[name];
          courses.forEach(c => {
            if (c.instructors) {
              const ci = c.instructors.indexOf(name);
              if (ci >= 0) c.instructors[ci] = newName;
            }
          });
        } else {
          coachAvatars[name] = avatar;
        }
        saveCoursesJS({ appConfig, categories, courses, coachAvatars });
        if (syncDetailsFromCourses(courses, details)) saveDetailsJS(details);
        sendJSON(res, 200, { ok: true, coachAvatars });
      });
      return;
    }

    // GET /api/upload/generate — Generate cloud-ready JSON
    if (pathname === '/api/upload/generate' && req.method === 'GET') {
      const json = genCloudJSON();
      sendJSON(res, 200, { coursesSize: json.coursesJSON.length, detailsSize: json.detailsJSON.length });
      return;
    }

    // POST /api/upload — Save cloud-ready JSON locally
    if (pathname === '/api/upload' && req.method === 'POST') {
      const json = genCloudJSON();
      fs.writeFileSync(path.join(ROOT, '.cloud-courses.json'), json.coursesJSON);
      fs.writeFileSync(path.join(ROOT, '.cloud-details.json'), json.detailsJSON);
      sendJSON(res, 200, {
        ok: true,
        files: { courses: `${(json.coursesJSON.length/1024).toFixed(1)}KB`, details: `${(json.detailsJSON.length/1024).toFixed(1)}KB` },
        hint: 'Now run: node scripts/upload-data.js  OR upload .cloud-courses.json + .cloud-details.json to Cloud Storage data/ folder'
      });
      return;
    }

    // POST /api/save/details — Save detail changes
    if (pathname === '/api/save/details' && req.method === 'POST') {
      withBody(req, res, ({ id, data: detailData }) => {
        const { details } = loadData();
        if (detailData) {
          details[id] = { ...details[id], ...detailData };
        }
        saveDetailsJS(details);
        sendJSON(res, 200, { ok: true });
      });
      return;
    }

    // POST /api/data/config — Save appearance config
    if (pathname === '/api/data/config' && req.method === 'POST') {
      withBody(req, res, ({ config }) => {
        const { categories, courses, coachAvatars } = loadData();
        saveCoursesJS({ appConfig: config, categories, courses, coachAvatars });
        sendJSON(res, 200, { ok: true });
      });
      return;
    }

    // POST /api/data/reorder — Reorder categories or coaches
    if (pathname === '/api/data/reorder' && req.method === 'POST') {
      withBody(req, res, ({ type, data }) => {
        const live = loadData();
        if (type === 'categories') {
          live.categories = data;
        } else if (type === 'coaches') {
          live.coachAvatars = data;
        }
        saveCoursesJS({ appConfig: live.appConfig, categories: live.categories, courses: live.courses, coachAvatars: live.coachAvatars });
        sendJSON(res, 200, { ok: true });
      });
      return;
    }

    // POST /api/deploy — Upload directly to Cloud Storage
    if (pathname === '/api/deploy' && req.method === 'POST') {
      // Lazy-load CloudBase (avoids crash if not installed, gives clear error)
      let CloudBase;
      try { CloudBase = require('@cloudbase/manager-node'); } catch(e) {
        sendJSON(res, 500, { error: '@cloudbase/manager-node not installed' });
        return;
      }

      // Load credentials from .env
      const envPath = path.join(ROOT, '.env');
      if (fs.existsSync(envPath)) {
        fs.readFileSync(envPath, 'utf-8').split('\n').forEach(line => {
          const m = line.match(/^(\w+):(.+)/);
          if (m) {
            if (m[1] === 'SecretId') process.env.TENCENTCLOUD_SECRETID = m[2].trim();
            if (m[1] === 'SecretKey') process.env.TENCENTCLOUD_SECRETKEY = m[2].trim();
          }
        });
      }

      const json = genCloudJSON();
      const app = CloudBase.init({ envId: ENV });
      const storage = app.storage;

      // Write temp files (uploadFile needs file path, not Buffer)
      const tmpCourses = path.join(ROOT, '.tmp-courses.json');
      const tmpDetails = path.join(ROOT, '.tmp-details.json');
      fs.writeFileSync(tmpCourses, json.coursesJSON);
      fs.writeFileSync(tmpDetails, json.detailsJSON);

      Promise.all([
        storage.uploadFile({ localPath: tmpCourses, cloudPath: 'data/courses.json' }).then(() => { fs.unlinkSync(tmpCourses); return 'courses.json ✓'; }),
        storage.uploadFile({ localPath: tmpDetails, cloudPath: 'data/details.json' }).then(() => { fs.unlinkSync(tmpDetails); return 'details.json ✓'; })
      ]).then(results => {
        const sizes = {
          courses: `${(json.coursesJSON.length/1024).toFixed(1)}KB`,
          details: `${(json.detailsJSON.length/1024).toFixed(1)}KB`
        };
        sendJSON(res, 200, { ok: true, results, sizes });
      }).catch(e => {
        sendJSON(res, 500, { error: e.message });
      });
      return;
    }

    sendJSON(res, 404, { error: 'unknown endpoint' });
  } catch(e) {
    sendJSON(res, 500, { error: e.message });
  }
}

// Serve static admin HTML
function serveAdmin(res) {
  const html = fs.readFileSync(path.join(ROOT, 'admin-panel.html'), 'utf-8');
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html);
}

// HTTP Server — localhost only (this server can rewrite data and deploy
// to the cloud with the .env credentials; never expose it on the network)
const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  if (url.pathname.startsWith('/api/')) {
    handleAPI(req, res);
  } else {
    serveAdmin(res);
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`\n  🏠 巴柔之家 Admin → http://localhost:${PORT}\n`);
  console.log(`  Edit → Save → Deploy. All from the browser.\n`);
});

server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.error(`\n  ⚠️  Port ${PORT} is in use. Kill it first:\n`);
    console.error(`  lsof -ti:${PORT} | xargs kill -9\n`);
  } else {
    console.error(e);
  }
  process.exit(1);
});

module.exports = server;
