# 🚀 Sentra API - Render Deployment Guide

## Quick Deploy to Render

### 1. Connect Repository
- Go to [Render Dashboard](https://dashboard.render.com)
- Click "New +" → "Web Service"
- Connect your GitHub repo: `https://github.com/YastecHub/sentra`

### 2. Configure Service
```
Name: sentra-api
Environment: Node
Build Command: npm install && npm run build
Start Command: npm start
```

### 3. Environment Variables
```
NODE_ENV=production
YARNGPT_API_KEY=sk_live_rGf_AkDLExsArC90eKpX-U0vhtNmGIR3jfSThXojpN8
YARNGPT_BASE_URL=https://yarngpt.ai/api
```

### 4. Deploy
- Click "Create Web Service"
- Wait for deployment to complete
- Your API will be live at: `https://sentra-api.onrender.com`

## Alternative: Manual Deploy

### Option 1: Using render.yaml
```bash
# Push render.yaml to your repo
git add render.yaml
git commit -m "Add Render config"
git push origin main
```

### Option 2: Heroku
```bash
# Install Heroku CLI
heroku create sentra-api
heroku config:set NODE_ENV=production
heroku config:set YARNGPT_API_KEY=sk_live_rGf_AkDLExsArC90eKpX-U0vhtNmGIR3jfSThXojpN8
git push heroku main
```

### Option 3: Railway
```bash
# Install Railway CLI
railway login
railway new sentra-api
railway add
railway deploy
```

## Post-Deployment

### Test Your Live API
```bash
# Replace with your actual URL
curl https://sentra-api.onrender.com/health

# Test AI endpoint
curl -X POST https://sentra-api.onrender.com/api/generate \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Write a health tip"}'
```

### Update Frontend URLs
```javascript
// Change from localhost to your live URL
const API_BASE = 'https://sentra-api.onrender.com/api';
```

## Troubleshooting

### Build Fails
- Ensure `npm run build` works locally
- Check TypeScript compilation errors
- Verify all dependencies in package.json

### Start Fails
- Check `dist/index.js` exists after build
- Verify PORT environment variable
- Check logs in Render dashboard

### API Not Responding
- Check environment variables are set
- Verify CORS configuration
- Check server logs for errors

## Files Added for Deployment
- ✅ `render.yaml` - Render configuration
- ✅ `Procfile` - Process file for deployment
- ✅ Updated `package.json` scripts
- ✅ Fixed TypeScript build output

Your API is now ready for production deployment! 🎉