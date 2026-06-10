# 巴柔之家 · WeChat Mini Program

A WeChat Mini Program that presents a browsable, bilingual catalog of Brazilian
Jiu-Jitsu instructional courses by five elite instructors.

## Features

- **152 courses** across 5 instructors — John Danaher, Gordon Ryan,
  Mikey Musumeci, Craig Jones, Lachlan Giles
- **Browse & filter** by Chinese category chips and coach (with photos)
- **Search** across course titles (中文/English) and instructors
- **Detail view** per course:
  - Chinese title (English subtitle)
  - Original Chinese course introduction
  - Full per-volume chapter list — bilingual table: English title · 中文 · 时长

## Architecture (Cloud Backend)

```
┌─────────────────────────────────────┐
│   WeChat Mini Program (Client)      │
│                                     │
│  pages/index/  ←── wx.cloud.  ──┐  │
│  pkgDetail/    ←── callFunc()  ──┤  │
└──────────────────────────────────│──┘
                                   │
┌──────────────────────────────────▼──┐
│   WeChat Cloud Functions (thin)     │
│                                     │
│  getCourses      (list + coaches)   │
│  getCourseDetail (detail by ID)     │
│                                     │
│  Cloud Storage (source of truth):   │
│    data/courses.json, details.json  │
│    images/thumbs/ covers/ coaches/  │
└─────────────────────────────────────┘
```

Data lives in Cloud Storage — adding or editing courses needs **no function
redeploy and no app release** (functions cache data for 5 minutes).

### Admin Panel

```bash
node admin-server.js   # → http://localhost:3456
```

Browser UI to edit courses, categories, coaches, badges, and app styling.
Saves to the local data files and deploys straight to Cloud Storage
(credentials read from `.env` — never commit that file).

### Project Structure

```
bjj-miniprogram/
├── cloudfunctions/          # WeChat Cloud Functions (backend)
│   ├── getCourses/          # Course list + coaches API
│   ├── getCourseDetail/     # Course detail API
│   ├── getCategories/       # (legacy, unused by app)
│   └── getCoaches/          # (legacy fallback)
├── scripts/
│   └── upload-data.js       # Upload data files to Cloud Storage
├── admin-server.js          # Local admin panel server (port 3456)
├── admin-panel.html         # Admin panel UI
├── pages/index/             # Home: course list, search, filter
├── pkgDetail/detail/        # Course detail page
├── data/courses.js          # Source course data (list level)
├── pkgDetail/details.js     # Source course data (detail level)
├── images/                  # Local images (upload to Cloud Storage)
├── app.js                   # Entry: wx.cloud.init()
├── app.json                 # App config
├── DEPLOY.md                # Deployment guide
└── project.config.json      # DevTools config
```

## Data

Course catalog, chapter breakdowns and cover art were compiled from public
BJJFanatics product pages. Chinese titles and chapter translations, plus the
generated Chinese course introductions, were produced with Gemini.

## Quick Start

### 1. Enable Cloud

See **[DEPLOY.md](DEPLOY.md)** for the full step-by-step guide.

Short version:
1. Enable WeChat Cloud Development in the console
2. Run `node scripts/prep-cloud-functions.js` to prepare data
3. Deploy cloud functions via WeChat DevTools
4. Upload images to Cloud Storage
5. Set your Cloud Environment ID in `app.js`

### 2. Local Development

A standalone Node.js backend is available at `../bjj-miniprogram-backend/` for
testing without deploying to WeChat Cloud:

```bash
cd ../bjj-miniprogram-backend
npm install && npm start
# API: http://localhost:3000/api/courses
```

Then in WeChat DevTools, check **不校验合法域名** to allow localhost.

## Development

Open the project root in **WeChat DevTools** (微信开发者工具). The `appid` is set
in `project.config.json`.
