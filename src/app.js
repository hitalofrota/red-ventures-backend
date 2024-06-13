import express from "express";
import routes from "./routes/index.js"
import cors from "cors"
import { swaggerUi, swaggerSpec } from '../swagger.js';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
    res.status(200).send("Projeto Teste Red Ventures s2");
});

routes(app);

export default app;