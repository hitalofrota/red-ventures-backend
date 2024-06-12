import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import path from 'path';

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API Documentation',
        version: '1.0.0',
        description: 'Documentation for my API',
      },
      servers: [
        {
          url: 'http://localhost:3001',
          description: 'Servidor Local',
        },
        {
          url: 'https://red-ventures-backend.vercel.app',
          description: 'Servidor de Produção',
        },
      ],
    },
    apis: [path.resolve('docs/swagger.yaml')],
  };

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };