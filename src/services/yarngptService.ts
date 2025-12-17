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
    // For hackathon demo - use intelligent mock responses
    return this.getMockResponse(prompt, options);
  }

  private getMockResponse(prompt: string, options: GenerateOptions) {
    const responses = {
      health: "Based on the symptoms provided, this appears to be a viral infection. The combination of headache, fever, and nausea suggests a common viral syndrome. Recommend rest, hydration, and monitoring symptoms. Seek medical attention if symptoms worsen or persist beyond 5 days.",
      vision: "Scene analysis: There is a sidewalk directly ahead that appears clear and safe for walking. A vehicle is parked to your left at a safe distance. No immediate obstacles detected in your path. Continue straight for safe navigation.",
      medical: "Clinical assessment indicates moderate symptoms requiring attention. Differential diagnosis includes viral syndrome, tension headache, or early migraine. Recommend symptomatic treatment and follow-up if symptoms persist.",
      general: "AI-powered response generated successfully. This demonstrates the integration capabilities of the Sentra platform with advanced language models for healthcare and accessibility applications."
    };

    let responseText = responses.general;
    const lowerPrompt = prompt.toLowerCase();
    
    if (lowerPrompt.includes('symptom') || lowerPrompt.includes('medical') || lowerPrompt.includes('diagnosis')) {
      responseText = responses.health;
    } else if (lowerPrompt.includes('scene') || lowerPrompt.includes('vision') || lowerPrompt.includes('obstacle')) {
      responseText = responses.vision;
    } else if (lowerPrompt.includes('clinical') || lowerPrompt.includes('report')) {
      responseText = responses.medical;
    } else if (lowerPrompt.includes('health') || lowerPrompt.includes('tip') || lowerPrompt.includes('hydrat')) {
      responseText = "Stay hydrated by drinking 8-10 glasses of water daily. Water helps regulate body temperature, transport nutrients, and flush out toxins. Add lemon or cucumber for variety and extra vitamins.";
    }

    return {
      generatedText: responseText,
      tokens: Math.floor(responseText.length / 4)
    };
  }

  async analyzeContent(text: string, analysisType: string = 'sentiment') {
    const analyses = {
      sentiment: `Sentiment analysis: The text shows a ${Math.random() > 0.5 ? 'positive' : 'neutral'} tone with ${Math.floor(Math.random() * 30 + 70)}% confidence. Key emotional indicators detected.`,
      topic: `Topic analysis: Primary themes include healthcare, technology, and user experience. Secondary topics relate to accessibility and AI integration.`,
      medical: `Medical content analysis: Text contains health-related terminology with clinical relevance. Suitable for medical documentation and patient communication.`
    };

    return {
      analysis: analyses[analysisType as keyof typeof analyses] || analyses.sentiment,
      confidence: 0.85 + Math.random() * 0.1
    };
  }
}

export default new YarnGPTService();