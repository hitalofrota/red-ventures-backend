import express from "express";
import broths from "./brothsRoutes.js";
import proteins from "./proteinsRoutes.js";
import OrderController from "../controllers/orderController.js";

const router = express.Router();

const routes = (app) => {
    app.use(express.json());

    app.use('/broths', broths);
    app.use('/proteins', proteins);

    router.post('/order', OrderController.createOrder);
    app.use(router);
};

export default routes;