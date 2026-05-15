const express = require('express');
const router = express.Router();
const Temperature = require('../Models/Temperature.model');
const {getTemperatures, getSingleTemperature, addTemperature, updateTemperature, deleteTemperature, addTemperatureAvecQuestions} = require('../Controllers/temperature.controller');
const { VerifyToken } = require('../Middleware/AuthMiddleware');


// get all temperatures
router.get('/', VerifyToken, getTemperatures);

// get single temperature by id
router.get('/:id',VerifyToken, getSingleTemperature);

//add new temperature
router.post('/', VerifyToken, addTemperatureAvecQuestions);

// update temperature by id (inutile)
router.put('/:id', VerifyToken, updateTemperature);

// delete temperature by id (inutile)
router.delete('/:id', VerifyToken, deleteTemperature);

module.exports = router;
