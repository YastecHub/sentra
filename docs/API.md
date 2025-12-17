# API Documentation

## Base URL
```
http://localhost:3000/api
```

## Authentication
All YarnGPT endpoints require API key authentication via environment variables.

## Endpoints

### Health Check
**GET** `/health`

Returns server status.

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### Generate Content
**POST** `/api/generate`

Generate AI content using YarnGPT.

**Request Body:**
```json
{
  "prompt": "Your text prompt here",
  "maxTokens": 100,
  "temperature": 0.7
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "generatedText": "AI generated content...",
    "tokens": 85
  }
}
```

### Analyze Content
**POST** `/api/analyze`

Analyze content using YarnGPT AI.

**Request Body:**
```json
{
  "text": "Content to analyze",
  "analysisType": "sentiment"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "analysis": "Analysis results...",
    "confidence": 0.95
  }
}
```

## Error Responses

All endpoints return errors in this format:

```json
{
  "success": false,
  "error": {
    "message": "Error description",
    "code": "ERROR_CODE"
  }
}
```

## Status Codes
- `200` - Success
- `400` - Bad Request
- `401` - Unauthorized
- `500` - Internal Server Error