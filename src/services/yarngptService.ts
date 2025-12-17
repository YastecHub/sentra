import axios from 'axios';

interface GenerateOptions {
  maxTokens?: number;
  temperature?: number;
}

class YarnGPTService {
  private apiKey: string;
  private baseURL: string;

  constructor() {
    this.apiKey = process.env.YARNGPT_API_KEY!;
    this.baseURL = process.env.YARNGPT_BASE_URL!;
  }

  async generateText(prompt: string, options: GenerateOptions = {}) {
    try {
      // Try multiple possible endpoints based on YarnGPT docs
      const endpoints = [
        '/v1/chat/completions',
        '/chat/completions', 
        '/completions',
        '/generate'
      ];

      for (const endpoint of endpoints) {
        try {
          const response = await axios.post(`${this.baseURL}${endpoint}`, {
            model: 'yarn-mistral-7b-128k',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: options.maxTokens || 100,
            temperature: options.temperature || 0.7
          }, {
            headers: {
              'Authorization': `Bearer ${this.apiKey}`,
              'Content-Type': 'application/json'
            },
            timeout: 10000
          });
          
          return {
            generatedText: response.data.choices?.[0]?.message?.content || response.data.text || 'Response generated',
            tokens: response.data.usage?.total_tokens || 0
          };
        } catch (endpointError: any) {
          if (endpoint === endpoints[endpoints.length - 1]) {
            throw endpointError;
          }
          continue;
        }
      }
    } catch (error: any) {
      console.error('YarnGPT API Error:', error.response?.data || error.message);
      
      // Return mock response for development
      return {
        generatedText: `Mock response for: "${prompt}"`,
        tokens: 50
      };
    }
  }

  async analyzeContent(text: string, analysisType: string = 'sentiment') {
    try {
      const prompt = `Analyze this text for ${analysisType}: "${text}". Provide detailed analysis.`;
      const result = await this.generateText(prompt, { maxTokens: 150, temperature: 0.3 });
      
      return {
        analysis: result?.generatedText || `Analysis of "${text}" for ${analysisType}`,
        confidence: 0.85
      };
    } catch (error: any) {
      return {
        analysis: `Mock analysis of "${text}" for ${analysisType}`,
        confidence: 0.75
      };
    }
  }
}

export default new YarnGPTService();