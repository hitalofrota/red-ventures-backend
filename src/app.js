import express from "express";
import routes from "./routes/index.js"
import cors from "cors"

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send("Projeto Teste Red Ventures s2");
});

routes(app);

export default app;