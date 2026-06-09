/**
 * Upload images to WeChat Cloud Storage
 *
 * Usage:
 *   1. First install: cd scripts && npm install @cloudbase/manager-node
 *   2. Run:
 *      node scripts/upload-images.js YOUR_ENV_ID
 *
 *   Or use the manual method below if you prefer.
 */

const { CloudBase } = require('@cloudbase/manager-node');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const IMAGES_DIR = path.join(ROOT, 'images');

(async () => {
  const envId = process.argv[2];
  if (!envId) {
    console.error('Usage: node upload-images.js <env-id>');
    console.error('Example: node upload-images.js bjj-abc123');
    process.exit(1);
  }

  const app = CloudBase.init({ envId });
  const storage = app.storage;

  const folders = [
    { local: 'thumbs', remote: 'images/thumbs' },   // 200px, list view
    { local: 'covers', remote: 'images/covers' },   // 640px, detail view
    { local: 'coaches', remote: 'images/coaches' }
  ];

  for (const { local, remote } of folders) {
    const dir = path.join(IMAGES_DIR, local);
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
    
    console.log(`Uploading ${files.length} files to ${remote}/ ...`);
    
    for (let i = 0; i < files.length; i++) {
      const fileName = files[i];
      const localPath = path.join(dir, fileName);
      const remotePath = `${remote}/${fileName}`;
      
      process.stdout.write(`  [${i + 1}/${files.length}] ${fileName} `);
      try {
        await storage.uploadFile({ cloudPath: remotePath, fileContent: fs.createReadStream(localPath) });
        console.log('✓');
      } catch (err) {
        console.log(`✗ ${err.message}`);
      }
    }
  }

  console.log('\nDone! All images uploaded.');
  console.log(`Cloud Storage prefix: cloud://${envId}.xxxx/images/`);
})();
