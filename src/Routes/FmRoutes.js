const { createFicheMedical, getFicheMedicalByUser } = require('../Controllers/FmController.js');
const express = require('express');


const router = express.Router();


router.post('/createFm', createFicheMedical);
router.get('/fm/:userId', getFicheMedicalByUser);


