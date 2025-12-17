import { Request, Response, NextFunction } from 'express';

export const validateApiKey = (req: Request, res: Response, next: NextFunction) => {
  if (!process.env.YARNGPT_API_KEY) {
    return res.status(500).json({
      success: false,
      error: { message: 'YarnGPT API key not configured', code: 'MISSING_API_KEY' }
    });
  }
  next();
};