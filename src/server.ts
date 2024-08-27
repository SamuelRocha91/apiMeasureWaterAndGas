import express from 'express';
import { Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerDocument from './swagger.json';

const app = express();

const options = {
    definition: swaggerDocument,
    apis: ['./src/routes/*.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (_req: Request, res: Response) =>
    res.json({ message: 'active server' }),
);

export default app;
