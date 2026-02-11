import { createFicheMedical, getFicheMedicalByUser } from "../Controllers/FmController";
import { Router } from "express";

const router = Router();


router.post('/createFm', createFicheMedical);
router.get('/fm/:userId', getFicheMedicalByUser);


