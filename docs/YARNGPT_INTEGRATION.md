# YarnGPT Integration Guide

## Overview
This document explains how to integrate and use YarnGPT API in the Sentra backend.

## API Reference
- **Documentation**: https://yarngpt.ai/api-docs
- **Base URL**: https://yarngpt.ai/api

## Setup

### 1. Environment Configuration
```env
YARNGPT_API_KEY=your_api_key
YARNGPT_BASE_URL=https://yarngpt.ai/api
```

### 2. Service Implementation
```javascript
// services/yarngptService.js
const axios = require('axios');

class YarnGPTService {
  constructor() {
    this.apiKey = process.env.YARNGPT_API_KEY;
    this.baseURL = process.env.YARNGPT_BASE_URL;
  }

  async generateText(prompt, options = {}) {
    const response = await axios.post(`${this.baseURL}/generate`, {
      prompt,
      ...options
    }, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  }
}
```

## Usage Examples

### Text Generation
```javascript
const yarngpt = new YarnGPTService();
const result = await yarngpt.generateText("Write a summary about AI");
```

### Content Analysis
```javascript
const analysis = await yarngpt.analyzeContent("Text to analyze");
```

## Error Handling
- Always wrap API calls in try-catch blocks
- Handle rate limiting (429 status)
- Implement retry logic for transient failures

## Best Practices
- Cache responses when appropriate
- Validate input before API calls
- Monitor API usage and costs
- Implement request timeouts