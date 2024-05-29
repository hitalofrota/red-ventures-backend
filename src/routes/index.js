import express from "express";
import broths from "./brothsRoutes";
import proteins from "./proteinsRoutes";

const routes = (app) => {
    app.routes('/', (req, res) => {
        res.status(200).send("Projeto Teste Red Ventures s2");
    })

    app.use(express.json());
    app.use(broths);
    app.use(proteins);
}

export default routes;