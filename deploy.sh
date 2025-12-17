#!/bin/bash
# Sentra API Deployment Script

echo "🚀 Deploying Sentra API..."

# Build the project
echo "📦 Building TypeScript..."
npm run build

# Check if build was successful
if [ -f "dist/index.js" ]; then
    echo "✅ Build successful!"
    echo "📁 Files ready for deployment:"
    ls -la dist/
else
    echo "❌ Build failed!"
    exit 1
fi

echo "🎉 Ready for deployment to Render!"
echo "📋 Next steps:"
echo "1. Push to GitHub: git add . && git commit -m 'Deploy ready' && git push"
echo "2. Go to Render Dashboard"
echo "3. Create new Web Service from GitHub repo"
echo "4. Use these settings:"
echo "   - Build Command: npm install"
echo "   - Start Command: npm start"
echo "   - Add environment variables from .env"