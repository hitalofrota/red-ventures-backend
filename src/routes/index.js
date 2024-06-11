import express from "express";
import broths from "./brothsRoutes.js";
import proteins from "./proteinsRoutes.js";
import orders from "./orderRoutes.js";

const routes = (app) => {
    app.use(express.json());

    app.use(broths);
    app.use(proteins);
    app.use(orders);
}

export default routes;