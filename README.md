# 🏥 Sentra - AI-Powered Healthcare & Accessibility Platform

> **Hackathon Project**: Revolutionizing healthcare and accessibility through AI

## 🚀 Quick Demo

- **Deployed API**: `https://sentra-2qi7.onrender.com`  
- **Swagger Docs**: `https://sentra-2qi7.onrender.com/api-docs`  
- **Health Check**: `https://sentra-2qi7.onrender.com/health`

Note: In development the server runs on `http://localhost:3002`. The docs and examples below show how to switch between local and deployed environments.

## 🎯 Hackathon Challenge

Sentra addresses critical healthcare and accessibility challenges by providing:

- **🤖 AI-Powered Medical Diagnosis** - Instant symptom analysis using YarnGPT
- **👁️ Vision Assistance** - Real-time scene analysis for visually impaired users
- **🎤 Voice-to-Diagnosis** - Convert speech to structured medical data
- **📋 Clinical Reports** - Auto-generate professional medical reports

## ⚡ 30-Second Setup

```bash
# 1. Install dependencies
pnpm install # or npm install

# 2. Start the server locally
pnpm run dev # or npm run dev

# 3. Test the local API
curl http://localhost:3002/health
```

**✅ Ready to use!** - YarnGPT API key is pre-configured

## 🔥 Key Features

### 🏥 Sentra Health
- **Symptom Analysis**: AI-powered medical diagnosis with confidence scores
- **Voice Processing**: Extract symptoms from natural speech
- **Clinical Reports**: Generate professional medical documentation

### 👁️ Sentra Vision  
- **Scene Analysis**: Describe surroundings for visually impaired users
- **Text Reading (OCR)**: Read text from images aloud
- **Obstacle Detection**: Navigate safely with AI guidance

### 🤖 Core AI Engine
- **Content Generation**: Create any text content using YarnGPT
- **Content Analysis**: Analyze sentiment, topics, and more

## 📡 API Endpoints

### Core AI
```http
POST /api/generate      # Generate AI content
POST /api/analyze       # Analyze text content
```

### Healthcare
```http
POST /api/health/analyze-symptoms    # Medical diagnosis
POST /api/health/voice-input         # Voice to symptoms
POST /api/health/clinical-report     # Generate reports
```

### Vision Assistance
```http
POST /api/vision/analyze-scene       # Scene description
POST /api/vision/read-text          # OCR text reading
POST /api/vision/detect-obstacles   # Navigation help
```

### Authentication
```http
POST /api/auth/register  # User registration
POST /api/auth/login     # User login
```

## 🧪 Test the API

### Quick Health Check
Use the deployed endpoint:
```bash
curl https://sentra-2qi7.onrender.com/health
```

Or run locally:
```bash
curl http://localhost:3002/health
```

### Generate AI Content
Deployed:
```bash
curl -X POST https://sentra-2qi7.onrender.com/api/generate \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Write a health tip for staying hydrated"}'
```

Local:
```bash
curl -X POST http://localhost:3002/api/generate \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Write a health tip for staying hydrated"}'
```

### Analyze Symptoms
```bash
curl -X POST http://localhost:3002/api/health/analyze-symptoms \
  -H "Content-Type: application/json" \
  -d '{
    "symptoms": ["headache", "fever", "nausea"],
    "age": 30,
    "sex": "male",
    "duration": "2 days",
    "severity": "moderate"
  }'
```

## 🏗️ Architecture

```
sentra/
├── src/
│   ├── controllers/     # API endpoint handlers
│   │   ├── aiController.ts
│   │   ├── healthController.ts
│   │   ├── visionController.ts
│   │   └── authController.ts
│   ├── services/        # Business logic
│   │   └── yarngptService.ts
│   ├── routes/          # API routes
│   ├── config/          # Swagger configuration
│   └── index.ts         # Server entry point
├── API_DOCUMENTATION.md # Complete API docs
└── package.json
```

## 🔧 Tech Stack

- **Backend**: Node.js + Express + TypeScript
- **AI Engine**: YarnGPT API Integration
- **Documentation**: Swagger/OpenAPI
- **Development**: Hot reload with ts-node

## 🌟 Hackathon Highlights

### Innovation
- **Multi-domain AI**: Healthcare + Accessibility in one platform
- **Voice Integration**: Natural speech to medical data
- **Real-time Processing**: Instant AI responses

### Technical Excellence
- **Production Ready**: Full TypeScript, error handling, logging
- **API First**: Complete REST API with Swagger docs
- **Scalable**: Modular architecture for easy expansion

### Social Impact
- **Healthcare Access**: AI-powered medical assistance
- **Accessibility**: Vision assistance for impaired users
- **Global Reach**: API-based for any frontend/mobile app

## 🚀 Frontend Integration

Use a base URL that switches between local and deployed environments. Example (browser-based frontend):

```javascript
const baseApi = process.env.NODE_ENV === 'production'
  ? `${window.location.origin}/api`
  : 'http://localhost:3002/api';

async function analyzeSymptoms(symptoms, patientInfo) {
  const res = await fetch(`${baseApi}/health/analyze-symptoms`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ symptoms, ...patientInfo })
  });
  return res.json();
}

async function generateContent(prompt) {
  const res = await fetch(`${baseApi}/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt })
  });
  return res.json();
}

// Usage example
const diagnosis = await analyzeSymptoms(['headache', 'fever'], { age: 30, sex: 'male' });
```

## 📊 Response Format

All endpoints return consistent JSON:
```json
{
  "success": true,
  "data": {
    // Response data
  },
  "error": {
    "message": "Error description",
    "code": "ERROR_CODE"
  }
}
```

## 🔑 Environment

```env
PORT=3002
NODE_ENV=development
YARNGPT_API_KEY=your_yarngpt_api_key_here
YARNGPT_BASE_URL=https://yarngpt.ai/api
SWAGGER_SERVER_URL= # optional: set to your deployed URL in production (e.g. https://sentra-2qi7.onrender.com)
```

## 🏆 Demo Script

1. **Start Server**: `npm run dev`
2. **Health Check**: Visit `http://localhost:3002/health`
3. **API Docs**: Visit `http://localhost:3002/api-docs`
4. **Test Diagnosis**: Use the symptom analysis endpoint
5. **Show Vision**: Demonstrate scene analysis
6. **Generate Content**: Show AI text generation

## 🎯 Next Steps

- **Mobile App**: React Native frontend
- **Real Database**: Replace mock auth with real DB
- **Image Processing**: Actual computer vision integration
- **Voice Recognition**: Real speech-to-text
- **Deployment**: AWS/Heroku production deployment

---

**Built for Hackathon** | **Ready for Production** | **Powered by YarnGPT AI**