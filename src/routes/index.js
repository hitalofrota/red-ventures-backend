import express from "express";
import broths from "./brothsRoutes.js";
import proteins from "./proteinsRoutes.js";

const routes = (app) => {
    app.use(express.json());

    app.get('/', (req, res) => {
        res.status(200).send("Projeto Teste Red Ventures s2");
    });

    app.use(broths);
    app.use(proteins);
}

export default routes;