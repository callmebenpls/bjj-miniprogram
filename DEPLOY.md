# Deploy Guide — WeChat Cloud Backend

## Architecture

```
┌─────────────────────────────────┐
│   Cloud Storage                 │
│   data/courses.json   (course index)    │
│   data/details.json    (full chapters)  │
│   images/covers/*.jpg  (152 covers)     │
│   images/coaches/*.jpg (5 avatars)      │
└──────────┬──────────────────────┘
           │ downloaded at runtime
┌──────────▼──────────────────────┐
│   Cloud Functions (deploy once) │
│   getCourses, getCourseDetail,  │
│   getCategories, getCoaches     │
└──────────┬──────────────────────┘
           │ wx.cloud.callFunction()
┌──────────▼──────────────────────┐
│   Mini Program Client           │
└─────────────────────────────────┘
```

**Key benefit:** Add/update courses → just run `node scripts/upload-data.js`. No function redeploy.

---

## One-Time Setup

### 1. Enable Cloud

Go to https://mp.weixin.qq.com → 开发 → 云开发 → 开通

### 2. Deploy Cloud Functions

In WeChat DevTools, right-click each function in `cloudfunctions/` → **上传并部署：云端安装依赖**:
- `getCourses`
- `getCourseDetail`
- `getCategories`
- `getCoaches`

### 3. Upload Images

In DevTools → 云开发 → 存储 → create folders and drag in:
- `images/covers/` (152 JPGs)
- `images/coaches/` (5 JPGs)

### 4. Upload Course Data

```bash
cd bjj-miniprogram
npm install @cloudbase/manager-node
node scripts/upload-data.js
```

---

## Ongoing: Adding Courses

Easiest: use the admin panel — `node admin-server.js` → http://localhost:3456 →
edit → 上传云端. Or by hand:

1. Edit `data/courses.js` and `pkgDetail/details.js` (add new course entries)
2. Upload new cover image to Cloud Storage (`images/thumbs/` + `images/covers/`)
3. Run: `node scripts/upload-data.js`

Cloud functions pick up new data within 5 minutes (cache TTL). No redeploy needed.

---

## API Reference

| Cloud Function | Input | Returns |
|---|---|---|
| `getCourses` | `{ q?, category?, instructor? }` | `{ total, config, categories, courses[], coaches[] }` |
| `getCourseDetail` | `{ id }` | `{ course, config }` |
| `getCategories` | `{}` | `{ categories[] }` (legacy, unused by app) |
| `getCoaches` | `{}` | `{ coaches[] }` (legacy fallback) |
