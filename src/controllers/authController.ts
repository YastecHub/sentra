import { Request, Response } from 'express';

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, name, role } = req.body;
    
    if (!email || !password || !name) {
      return res.status(400).json({
        success: false,
        error: { message: 'Email, password, and name are required', code: 'MISSING_FIELDS' }
      });
    }

    // Mock user creation
    const user = {
      id: Date.now().toString(),
      email,
      name,
      role: role || 'patient',
      createdAt: new Date()
    };

    res.status(201).json({
      success: true,
      data: { user, token: 'mock_jwt_token' }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: { message: error.message, code: 'REGISTRATION_ERROR' }
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: { message: 'Email and password are required', code: 'MISSING_CREDENTIALS' }
      });
    }

    // Mock authentication
    const user = {
      id: '1',
      email,
      name: 'Demo User',
      role: 'patient'
    };

    res.json({
      success: true,
      data: { user, token: 'mock_jwt_token' }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: { message: error.message, code: 'LOGIN_ERROR' }
    });
  }
};