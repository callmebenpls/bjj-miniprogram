# BJJ 课程 · WeChat Mini Program

A WeChat Mini Program that presents a browsable, bilingual catalog of Brazilian
Jiu-Jitsu instructional courses by five elite instructors.

## Features

- **152 courses** across 5 instructors — John Danaher, Gordon Ryan,
  Mikey Musumeci, Craig Jones, Lachlan Giles
- **Browse & filter** by Chinese category chips and coach (with photos)
- **Search** across course titles (中文/English) and instructors
- **Detail view** per course:
  - Chinese title (English subtitle)
  - Original Chinese course introduction focused on the technical highlights
  - Full per-volume chapter list — bilingual table: English title · 中文 · 时长

## Structure

```
app.json / app.js / app.wxss     App shell
pages/index/                     List: search, categories, coaches, course cards
pages/detail/                    Course detail: intro + bilingual chapter tables
data/courses.js                  Lightweight list data (id, titles, cat, volumes, image)
data/details.js                  Full per-course detail (intro, chapters, etc.)
images/coaches/                  Instructor portrait avatars
```

The data layer is split so the list page loads a small payload (~60 KB) while
full chapter content lives in `details.js`, loaded per-course on the detail page.

## Data

Course catalog, chapter breakdowns and cover art were compiled from public
BJJFanatics product pages. Chinese titles and chapter translations, plus the
generated Chinese course introductions, were produced with Gemini.

## Development

Open the project root in **WeChat DevTools** (微信开发者工具). The `appid` is set
in `project.config.json`.
