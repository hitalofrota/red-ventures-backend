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
  },
  apis: [path.resolve('docs/swagger.yaml')], // Ajuste o caminho para o arquivo YAML
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };