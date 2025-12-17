# 🎯 Sentra API - Live Demo

## ✅ API Status: WORKING
**Server**: `http://localhost:3002`

---

## 🔗 Quick Links

| Endpoint | URL | Status |
|----------|-----|--------|
| Health Check | `http://localhost:3002/health` | ✅ |
| API Docs | `http://localhost:3002/api-docs` | ✅ |
| Generate AI | `http://localhost:3002/api/generate` | ✅ |
| Medical Diagnosis | `http://localhost:3002/api/health/analyze-symptoms` | ✅ |
| Vision Analysis | `http://localhost:3002/api/vision/analyze-scene` | ✅ |

---

## 🧪 Test Commands

### 1. Health Check
```bash
curl http://localhost:3002/health
```

### 2. Generate Health Tip
```bash
curl -X POST http://localhost:3002/api/generate \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Write a health tip about hydration"}'
```

### 3. Medical Diagnosis
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

### 4. Vision Scene Analysis
```bash
curl -X POST http://localhost:3002/api/vision/analyze-scene \
  -H "Content-Type: application/json" \
  -d '{
    "imageData": "mock_image_data",
    "mode": "navigation"
  }'
```

### 5. User Registration
```bash
curl -X POST http://localhost:3002/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "demo@sentra.com",
    "password": "hackathon2024",
    "name": "Demo User"
  }'
```

---

## 🎬 Hackathon Demo Script

1. **Show API is Live**: Visit `http://localhost:3002/health`
2. **Show Documentation**: Visit `http://localhost:3002/api-docs`
3. **Demo AI Generation**: Run health tip command
4. **Demo Medical AI**: Run symptom analysis
5. **Demo Vision AI**: Run scene analysis
6. **Show Frontend Ready**: Explain API structure

---

## 🚀 Frontend Integration

```javascript
// Ready-to-use for React/Vue/Angular
const api = {
  baseURL: 'http://localhost:3002/api',
  
  async analyzeSymptoms(symptoms, patientInfo) {
    const response = await fetch(`${this.baseURL}/health/analyze-symptoms`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ symptoms, ...patientInfo })
    });
    return response.json();
  }
};
```

**✅ All endpoints working with intelligent mock responses for hackathon demo!**