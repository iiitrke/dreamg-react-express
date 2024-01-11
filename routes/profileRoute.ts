import express, { Express, Request, Response, Router } from "express";
import aa from "../controllers/ProfileController";
import ProfilController from "../controllers/ProfileController";

const router = express.Router();

router.get("/", ProfilController.index);

export default router;
