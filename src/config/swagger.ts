import swaggerJsdoc from 'swagger-jsdoc';

const port = process.env.PORT || 3002;

// Allow overriding the server URL with an env var (useful for docs in prod)
// In production, default to a relative URL so the Swagger UI examples use the
// current host instead of hard-coded localhost.
const defaultServerUrl = process.env.SWAGGER_SERVER_URL || (process.env.NODE_ENV === 'production' ? '/' : `http://localhost:${port}`);

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sentra Backend API',
      version: '1.0.0',
      description: 'Node.js backend with YarnGPT integration',
    },
    servers: [
      {
        url: defaultServerUrl,
        description: 'API server',
      },
    ],
  },
  apis: ['./src/routes/*.ts'],
};

export const specs = swaggerJsdoc(options);