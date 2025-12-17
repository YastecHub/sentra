# Sentra Backend API Documentation

## Base URL
```
http://localhost:3002
```

## API Documentation (Swagger)
```
http://localhost:3002/api-docs
```

## Authentication
Currently using mock authentication. All endpoints return mock JWT tokens.

## Response Format
All API responses follow this structure:
```json
{
  "success": boolean,
  "data": object,
  "error": {
    "message": string,
    "code": string
  }
}
```

---

## Core AI Endpoints

### 1. Generate AI Content
**POST** `/api/generate`

Generate text content using YarnGPT AI.

**Request Body:**
```json
{
  "prompt": "string (required)",
  "maxTokens": "number (optional, default: 100)",
  "temperature": "number (optional, default: 0.7, range: 0-1)"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "generatedText": "AI generated content...",
    "tokens": 45
  }
}
```

**Example:**
```javascript
fetch('http://localhost:3000/api/generate', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    prompt: "Write a short story about AI",
    maxTokens: 150,
    temperature: 0.8
  })
})
```

### 2. Analyze Content
**POST** `/api/analyze`

Analyze text content for sentiment, topics, etc.

**Request Body:**
```json
{
  "text": "string (required)",
  "analysisType": "string (optional, default: 'sentiment')"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "analysis": "Detailed analysis result...",
    "confidence": 0.85
  }
}
```

---

## Authentication Endpoints

### 3. Register User
**POST** `/api/auth/register`

**Request Body:**
```json
{
  "email": "string (required)",
  "password": "string (required)",
  "name": "string (required)",
  "role": "string (optional: 'patient', 'doctor', 'admin')"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "1234567890",
      "email": "user@example.com",
      "name": "John Doe",
      "role": "patient",
      "createdAt": "2024-01-01T00:00:00.000Z"
    },
    "token": "mock_jwt_token"
  }
}
```

### 4. Login User
**POST** `/api/auth/login`

**Request Body:**
```json
{
  "email": "string (required)",
  "password": "string (required)"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "1",
      "email": "user@example.com",
      "name": "Demo User",
      "role": "patient"
    },
    "token": "mock_jwt_token"
  }
}
```

---

## Sentra Health Endpoints

### 5. Analyze Symptoms
**POST** `/api/health/analyze-symptoms`

Analyze patient symptoms for medical diagnosis.

**Request Body:**
```json
{
  "symptoms": ["headache", "nausea", "fever"],
  "age": 30,
  "sex": "male",
  "duration": "3 days",
  "severity": "moderate",
  "riskFactors": ["smoking", "diabetes"]
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "conditions": [
      {
        "name": "Migraine",
        "probability": 68,
        "confidence": 85
      },
      {
        "name": "Tension Headache",
        "probability": 22,
        "confidence": 70
      }
    ],
    "explanation": "Based on symptoms analysis...",
    "riskLevel": "medium",
    "recommendations": ["Rest", "Hydration", "Monitor symptoms"]
  }
}
```

### 6. Process Voice Input
**POST** `/api/health/voice-input`

Extract symptoms from voice/audio text input.

**Request Body:**
```json
{
  "audioText": "I have been having headaches for 3 days...",
  "patientInfo": {
    "age": 30,
    "sex": "female"
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "extractedSymptoms": ["headache", "nausea", "blurred vision"],
    "structuredData": {
      "symptoms": ["headache", "nausea", "blurred vision"],
      "duration": "3 days",
      "severity": "moderate"
    },
    "rawAnalysis": "AI analysis of voice input..."
  }
}
```

### 7. Generate Clinical Report
**POST** `/api/health/clinical-report`

Generate clinical reports for patients.

**Request Body:**
```json
{
  "patientData": {
    "symptoms": ["headache", "fever"],
    "age": 35,
    "sex": "male"
  },
  "diagnosis": "Viral infection",
  "recommendations": ["Rest", "Fluids", "Paracetamol"]
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "reportId": "1234567890",
    "clinicalReport": "Detailed clinical report...",
    "generatedAt": "2024-01-01T00:00:00.000Z",
    "patientSummary": "Clinical assessment completed"
  }
}
```

---

## Sentra Vision Endpoints

### 8. Analyze Scene
**POST** `/api/vision/analyze-scene`

Analyze visual scenes for visually impaired users.

**Request Body:**
```json
{
  "imageData": "base64_encoded_image_string",
  "mode": "passive"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "objects": [
      {
        "name": "car",
        "position": "left",
        "distance": "close",
        "riskLevel": "caution"
      }
    ],
    "sceneDescription": "A car is approaching from the left...",
    "safetyAlerts": ["Vehicle approaching from left"],
    "narration": "A car is approaching from your left. Safe sidewalk ahead."
  }
}
```

### 9. Read Text (OCR)
**POST** `/api/vision/read-text`

Extract and read text from images.

**Request Body:**
```json
{
  "imageData": "base64_encoded_image_string",
  "language": "en"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "extractedText": "Sample extracted text",
    "audioNarration": "Text reading narration...",
    "language": "en",
    "confidence": 95
  }
}
```

### 10. Detect Obstacles
**POST** `/api/vision/detect-obstacles`

Detect obstacles for navigation assistance.

**Request Body:**
```json
{
  "imageData": "base64_encoded_image_string",
  "userPosition": {
    "x": 0,
    "y": 0
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "obstacles": [
      {
        "type": "stairs",
        "direction": "ahead",
        "distance": "2 meters",
        "action": "use handrail on right"
      }
    ],
    "safePath": "Continue straight, handrail available on right",
    "riskLevel": "low",
    "guidance": "Navigation guidance provided"
  }
}
```

---

## Health Check

### 11. Health Check
**GET** `/health`

Check API server status.

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

---

## Error Handling

All endpoints return appropriate HTTP status codes:
- `200` - Success
- `201` - Created (for registration)
- `400` - Bad Request (missing/invalid parameters)
- `500` - Internal Server Error

Error response format:
```json
{
  "success": false,
  "error": {
    "message": "Error description",
    "code": "ERROR_CODE"
  }
}
```

Common error codes:
- `MISSING_PROMPT` - Prompt parameter required
- `MISSING_TEXT` - Text parameter required
- `MISSING_SYMPTOMS` - Symptoms array required
- `MISSING_IMAGE` - Image data required
- `GENERATION_ERROR` - AI generation failed
- `ANALYSIS_ERROR` - Content analysis failed

---

## Frontend Integration Examples

### React/JavaScript Example:
```javascript
// API service
class SentraAPI {
  constructor(baseURL = 'http://localhost:3000') {
    this.baseURL = baseURL;
  }

  async generateContent(prompt, options = {}) {
    const response = await fetch(`${this.baseURL}/api/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, ...options })
    });
    return response.json();
  }

  async analyzeSymptoms(symptoms, patientInfo) {
    const response = await fetch(`${this.baseURL}/api/health/analyze-symptoms`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ symptoms, ...patientInfo })
    });
    return response.json();
  }

  async login(email, password) {
    const response = await fetch(`${this.baseURL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    return response.json();
  }
}

// Usage
const api = new SentraAPI();

// Generate content
const result = await api.generateContent("Write a health tip", {
  maxTokens: 100,
  temperature: 0.7
});

// Analyze symptoms
const diagnosis = await api.analyzeSymptoms(
  ["headache", "fever"],
  { age: 30, sex: "male", duration: "2 days", severity: "moderate" }
);
```

### Axios Example:
```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: { 'Content-Type': 'application/json' }
});

// Generate content
const generateContent = async (prompt) => {
  try {
    const response = await api.post('/generate', { prompt });
    return response.data;
  } catch (error) {
    console.error('API Error:', error.response?.data || error.message);
  }
};
```

---

## Running the API

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment:**
   ```bash
   cp .env.example .env
   # Edit .env with your YarnGPT API key
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

The API will be available at `http://localhost:3000` with Swagger documentation at `http://localhost:3000/api-docs`.