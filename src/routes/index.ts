import express from 'express';
import { generateContent, analyzeContent } from '../controllers/aiController';
import { register, login } from '../controllers/authController';
import { analyzeSymptoms, processVoiceInput, generateClinicalReport } from '../controllers/healthController';
import { analyzeScene, readText, detectObstacles } from '../controllers/visionController';

const router = express.Router();

/**
 * @swagger
 * /api/generate:
 *   post:
 *     summary: Generate AI content using YarnGPT
 *     tags: [AI]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - prompt
 *             properties:
 *               prompt:
 *                 type: string
 *                 description: Text prompt for AI generation
 *               maxTokens:
 *                 type: number
 *                 description: Maximum tokens to generate
 *                 default: 100
 *               temperature:
 *                 type: number
 *                 description: Creativity level (0-1)
 *                 default: 0.7
 *     responses:
 *       200:
 *         description: Content generated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */
router.post('/generate', generateContent);

/**
 * @swagger
 * /api/analyze:
 *   post:
 *     summary: Analyze content using YarnGPT AI
 *     tags: [AI]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - text
 *             properties:
 *               text:
 *                 type: string
 *                 description: Content to analyze
 *               analysisType:
 *                 type: string
 *                 description: Type of analysis
 *                 default: sentiment
 *     responses:
 *       200:
 *         description: Analysis completed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */
router.post('/analyze', analyzeContent);

// Authentication
/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password, name]
 *             properties:
 *               email: {type: string}
 *               password: {type: string}
 *               name: {type: string}
 *               role: {type: string, enum: [patient, doctor, admin]}
 *     responses:
 *       201: {description: User registered successfully}
 */
router.post('/auth/register', register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: User login
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email: {type: string}
 *               password: {type: string}
 *     responses:
 *       200: {description: Login successful}
 */
router.post('/auth/login', login);

// Sentra Health
/**
 * @swagger
 * /api/health/analyze-symptoms:
 *   post:
 *     summary: Analyze symptoms for diagnosis
 *     tags: [Health]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [symptoms]
 *             properties:
 *               symptoms: {type: array, items: {type: string}}
 *               age: {type: number}
 *               sex: {type: string}
 *               duration: {type: string}
 *               severity: {type: string, enum: [mild, moderate, severe]}
 *     responses:
 *       200: {description: Symptoms analyzed successfully}
 */
router.post('/health/analyze-symptoms', analyzeSymptoms);

/**
 * @swagger
 * /api/health/voice-input:
 *   post:
 *     summary: Process voice input for symptom extraction
 *     tags: [Health]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [audioText]
 *             properties:
 *               audioText: {type: string}
 *               patientInfo: {type: object}
 *     responses:
 *       200: {description: Voice input processed}
 */
router.post('/health/voice-input', processVoiceInput);

/**
 * @swagger
 * /api/health/clinical-report:
 *   post:
 *     summary: Generate clinical report
 *     tags: [Health]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               patientData: {type: object}
 *               diagnosis: {type: string}
 *               recommendations: {type: array, items: {type: string}}
 *     responses:
 *       200: {description: Clinical report generated}
 */
router.post('/health/clinical-report', generateClinicalReport);

// Sentra Vision
/**
 * @swagger
 * /api/vision/analyze-scene:
 *   post:
 *     summary: Analyze scene for visually impaired users
 *     tags: [Vision]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [imageData]
 *             properties:
 *               imageData: {type: string}
 *               mode: {type: string, enum: [passive, active, navigation]}
 *     responses:
 *       200: {description: Scene analyzed successfully}
 */
router.post('/vision/analyze-scene', analyzeScene);

/**
 * @swagger
 * /api/vision/read-text:
 *   post:
 *     summary: Read text from image (OCR)
 *     tags: [Vision]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [imageData]
 *             properties:
 *               imageData: {type: string}
 *               language: {type: string}
 *     responses:
 *       200: {description: Text extracted and read}
 */
router.post('/vision/read-text', readText);

/**
 * @swagger
 * /api/vision/detect-obstacles:
 *   post:
 *     summary: Detect obstacles for navigation
 *     tags: [Vision]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [imageData]
 *             properties:
 *               imageData: {type: string}
 *               userPosition: {type: object}
 *     responses:
 *       200: {description: Obstacles detected}
 */
router.post('/vision/detect-obstacles', detectObstacles);

export default router;