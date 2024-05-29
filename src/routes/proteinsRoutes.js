import express from "express";
import ProteinController from "../controllers/proteinsController";

const router = express.Router();

router
    .get("/proteins", ProteinController.findAllProteins)
    .get("/proteins/:id", ProteinController.findOneProtein)

export default router;