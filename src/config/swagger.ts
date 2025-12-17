import swaggerJsdoc from 'swagger-jsdoc';

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
        url: `http://localhost:${process.env.PORT || 3000}`,
        description: 'Development server',
      },
    ],
  },
  apis: ['./src/routes/*.ts'],
};

export const specs = swaggerJsdoc(options);