import { Router } from 'express';
import { createAlert, getAlertsByUser, deleteAlert } from '../Controllers/AlertController.js';
import { VerifyToken } from '../Middleware/AuthMiddleware.js';


const router = Router();


router.post('/createAlert', VerifyToken, createAlert);
router.get('/alerts/:userId', VerifyToken, getAlertsByUser);
router.delete('/deleteAlert/:alertId', VerifyToken, deleteAlert);

export default router