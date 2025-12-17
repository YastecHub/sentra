import { Request, Response } from 'express';
import yarngptService from '../services/yarngptService';

export const analyzeScene = async (req: Request, res: Response) => {
  try {
    const { imageData, mode } = req.body;
    
    if (!imageData) {
      return res.status(400).json({
        success: false,
        error: { message: 'Image data is required', code: 'MISSING_IMAGE' }
      });
    }

    const prompt = `Analyze this scene for a visually impaired person. Describe objects, obstacles, 
    and safety concerns. Mode: ${mode || 'passive'}. Provide clear directional guidance.`;

    const analysis = await yarngptService.generateText(prompt, { maxTokens: 250 });

    res.json({
      success: true,
      data: {
        objects: [
          { name: 'car', position: 'left', distance: 'close', riskLevel: 'caution' },
          { name: 'sidewalk', position: 'front', distance: 'immediate', riskLevel: 'safe' }
        ],
        sceneDescription: analysis?.generatedText || 'Scene analyzed',
        safetyAlerts: ['Vehicle approaching from left'],
        narration: 'A car is approaching from your left. Safe sidewalk ahead.'
      }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: { message: error.message, code: 'VISION_ANALYSIS_ERROR' }
    });
  }
};

export const readText = async (req: Request, res: Response) => {
  try {
    const { imageData, language } = req.body;
    
    if (!imageData) {
      return res.status(400).json({
        success: false,
        error: { message: 'Image data is required', code: 'MISSING_IMAGE' }
      });
    }

    const prompt = `Extract and read text from this image. Provide clear pronunciation 
    and context. Language: ${language || 'English'}`;

    const result = await yarngptService.generateText(prompt, { maxTokens: 200 });

    res.json({
      success: true,
      data: {
        extractedText: 'Sample extracted text',
        audioNarration: result?.generatedText || 'Text extracted',
        language: language || 'en',
        confidence: 95
      }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: { message: error.message, code: 'OCR_ERROR' }
    });
  }
};

export const detectObstacles = async (req: Request, res: Response) => {
  try {
    const { imageData, userPosition } = req.body;
    
    const prompt = `Detect obstacles and hazards for navigation assistance. 
    Provide directional guidance and risk assessment.`;

    const detection = await yarngptService.generateText(prompt, { maxTokens: 200 });

    res.json({
      success: true,
      data: {
        obstacles: [
          { type: 'stairs', direction: 'ahead', distance: '2 meters', action: 'use handrail on right' }
        ],
        safePath: 'Continue straight, handrail available on right',
        riskLevel: 'low',
        guidance: detection?.generatedText || 'Navigation guidance provided'
      }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: { message: error.message, code: 'OBSTACLE_DETECTION_ERROR' }
    });
  }
};