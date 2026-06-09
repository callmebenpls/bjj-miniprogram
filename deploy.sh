#!/bin/bash
# BJJ Mini Program — One-click Cloud Deploy
# Usage: bash deploy.sh

set -e
ENV_ID="cloudbase-d2gjwgi5reb74969f"
ROOT="$(cd "$(dirname "$0")" && pwd)"
echo "🚀 Deploying to: $ENV_ID"
echo ""

# Step 1: Deploy Cloud Functions
echo "=== Step 1: Deploy cloud functions ==="
FUNCTIONS=("getCourses" "getCourseDetail" "getCategories" "getCoaches")

for fn in "${FUNCTIONS[@]}"; do
  echo "  Deploying $fn ..."
  npx @cloudbase/cli fn deploy "$fn" \
    --envId "$ENV_ID" \
    --path "$ROOT/cloudfunctions/$fn" \
    --force 2>&1 | tail -3
done
echo "  ✓ All cloud functions deployed"
echo ""

# Step 2: Upload Images
echo "=== Step 2: Upload images ==="
cd "$ROOT/scripts"
npm install @cloudbase/manager-node --save 2>&1 | tail -3
node upload-images.js "$ENV_ID"
echo ""

echo "🎉 Deploy complete!"
