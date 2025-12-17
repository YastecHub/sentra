import { Request, Response } from 'express';
import yarngptService from '../services/yarngptService';

export const generateContent = async (req: Request, res: Response) => {
  try {
    const { prompt, maxTokens, temperature } = req.body;
    
    if (!prompt) {
      return res.status(400).json({
        success: false,
        error: { message: 'Prompt is required', code: 'MISSING_PROMPT' }
      });
    }

    const result = await yarngptService.generateText(prompt, { maxTokens, temperature });
    
    res.json({
      success: true,
      data: result
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: { message: error.message, code: 'GENERATION_ERROR' }
    });
  }
};

export const analyzeContent = async (req: Request, res: Response) => {
  try {
    const { text, analysisType } = req.body;
    
    if (!text) {
      return res.status(400).json({
        success: false,
        error: { message: 'Text is required', code: 'MISSING_TEXT' }
      });
    }

    const result = await yarngptService.analyzeContent(text, analysisType);
    
    res.json({
      success: true,
      data: result
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: { message: error.message, code: 'ANALYSIS_ERROR' }
    });
  }
};