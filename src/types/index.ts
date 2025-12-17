export interface User {
  id: string;
  email: string;
  name: string;
  role: 'patient' | 'doctor' | 'admin';
  createdAt: Date;
}

export interface HealthInput {
  symptoms: string[];
  duration: string;
  severity: 'mild' | 'moderate' | 'severe';
  age: number;
  sex: 'male' | 'female' | 'other';
  riskFactors: string[];
  redFlags: string[];
}

export interface DiagnosisResult {
  conditions: Array<{
    name: string;
    probability: number;
    confidence: number;
  }>;
  explanation: string;
  riskLevel: 'low' | 'medium' | 'high' | 'urgent';
  recommendations: string[];
}

export interface VisionAnalysis {
  objects: Array<{
    name: string;
    position: string;
    distance: string;
    riskLevel: 'safe' | 'caution' | 'danger';
  }>;
  sceneDescription: string;
  safetyAlerts: string[];
  narration: string;
}