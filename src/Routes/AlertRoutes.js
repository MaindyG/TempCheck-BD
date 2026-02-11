const express = require('express');
const { createAlerte, getAlertsByUser, deleteAlerts } = require('../Controllers/AlertController.js');
const { VerifyToken } = require('../Middleware/AuthMiddleware.js');


const router = express.Router();


router.post('/createAlert', VerifyToken, createAlerte);
router.get('/alerts/:userId', VerifyToken, getAlertsByUser);
router.delete('/deleteAlert/:alertId', VerifyToken, deleteAlerts);

module.exports = router;

