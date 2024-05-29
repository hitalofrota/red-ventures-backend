import express from "express";
import OrderController from "../controllers/orderControoller.js";

const router = express.Router();

router
    .post("/order", OrderController.createOrder)

export default router;