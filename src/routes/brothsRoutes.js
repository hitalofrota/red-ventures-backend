import express from "express";
import BrothController from "../controllers/brothsController";

const router = express.Router();

router
    .get("/proteins", BrothController.findAllBroths)
    .get("/proteins/:id", BrothController.findOneBroth)

export default router;