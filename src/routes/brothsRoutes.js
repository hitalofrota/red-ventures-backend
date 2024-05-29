import express from "express";
import BrothController from "../controllers/brothsController.js";

const router = express.Router();

router
    .get("/broths", BrothController.findAllBroths)
    .get("/broths/:id", BrothController.findOneBroth)

export default router;