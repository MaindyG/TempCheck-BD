const express = require('express');
const router = express.Router();
const Temperature = require('../Models/Temperature.model');
const {getTemperatures, getSingleTemperature, addTemperature, updateTemperature, deleteTemperature} = require('../Controllers/temperature.controller');


// get all temperatures
router.get('/', getTemperatures);

// get single temperature by id
router.get('/:id', getSingleTemperature);

//add new temperature
router.post('/', addTemperature);

// update temperature by id (inutile)
router.put('/:id', updateTemperature);

// delete temperature by id (inutile)
router.delete('/:id', deleteTemperature);

module.exports = router;
