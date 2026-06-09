# Deploy Guide — WeChat Cloud Backend

This guide walks through deploying the BJJ Mini Program with WeChat Cloud Functions as the backend.

---

## Step 1: Enable WeChat Cloud Development

1. Open the [WeChat Mini Program Console](https://mp.weixin.qq.com/)
2. Navigate to **开发 > 云开发** (Development > Cloud Development)
3. Click **开通** (Enable) to create a cloud environment
4. Note down your **Environment ID** (looks like `your-env-xxxxx`)

---

## Step 2: Configure the Mini Program

1. Open `app.js` and replace the env comment with your Environment ID:
   ```js
   wx.cloud.init({
     env: 'your-env-xxxxx',  // ← your Environment ID
     traceUser: true
   });
   ```

2. In WeChat DevTools, click **云开发** (Cloud Development) in the toolbar to verify the connection.

---

## Step 3: Prepare Cloud Function Data

Run this script to copy data into the cloud function directories:

```bash
cd bjj-miniprogram
node scripts/prep-cloud-functions.js
```

This generates the JSON data files that each cloud function needs.

---

## Step 4: Install & Deploy Cloud Functions

For each cloud function in `cloudfunctions/`, install dependencies and deploy:

### Via WeChat DevTools (Recommended)

1. In DevTools, expand the `cloudfunctions/` folder in the file tree
2. Right-click each function folder (`getCourses`, `getCourseDetail`, `getCategories`, `getCoaches`)
3. Select **上传并部署：云端安装依赖** (Upload and Deploy: Install Dependencies in Cloud)

### Via CLI

```bash
# Install dependencies locally
cd cloudfunctions/getCourses && npm install && cd ../..
cd cloudfunctions/getCourseDetail && npm install && cd ../..
cd cloudfunctions/getCategories && npm install && cd ../..
cd cloudfunctions/getCoaches && npm install && cd ../..

# Then in WeChat DevTools, right-click each → Upload and Deploy
```

---

## Step 5: Upload Images to Cloud Storage

1. In WeChat DevTools, open the **云开发** (Cloud Development) panel
2. Go to **存储** (Storage)
3. Create these folders:
   - `images/covers/`
   - `images/coaches/`
4. Upload all images:
   - `images/covers/*.jpg` → Cloud Storage `images/covers/`
   - `images/coaches/*.jpg` → Cloud Storage `images/coaches/`

> **Note:** You can also upload images via the Cloud Development Console in your browser.

---

## Step 6: Update Image Paths in Data

After images are uploaded, find the cloud:// file IDs for each image and update the `image` fields in your course data. Each image path needs to be updated from:
```
/images/covers/xxx.jpg
```
to:
```
cloud://your-env-id.xxxx/images/covers/xxx.jpg
```

You can get the actual cloud:// file ID from the Cloud Storage console.

---

## Step 7: Test

1. Compile and run the mini program in WeChat DevTools
2. The home page should load courses from the cloud
3. Tapping a course should load its detail from the cloud

---

## API Reference

| Cloud Function | Input | Returns |
|---|---|---|
| `getCourses` | `{ q?, category?, instructor? }` | `{ total, categories, courses[] }` |
| `getCourseDetail` | `{ id }` | `{ course }` |
| `getCategories` | `{}` | `{ categories[] }` |
| `getCoaches` | `{}` | `{ coaches[] }` |

---

## Fallback: Local Node.js Backend

A standalone Express backend is also available at `../bjj-miniprogram-backend/` for local development:

```bash
cd ../bjj-miniprogram-backend
npm install
npm start
# API runs on http://localhost:3000
```

To use it with the mini program, check "不校验合法域名" in DevTools settings.

---

## Troubleshooting

**Cloud function not found:** Make sure you deployed all 4 functions via DevTools.

**wx.cloud is undefined:** Make sure cloud is enabled in the WeChat console (Step 1).

**Images not loading:** Verify images are uploaded to Cloud Storage and the file IDs match in your course data.
