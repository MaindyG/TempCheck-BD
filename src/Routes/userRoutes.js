import express from 'express';
import { createUser, getAllUsers, getUserByEmail, modifyUser, deleteUser } from '../Controllers/UserController.js';
import { VerifyToken } from '../Middleware/AuthMiddleware.js';

const router = express.Router();

router.post('/newUser', createUser);
router.get('/allUsers', VerifyToken, getAllUsers);
router.get('/user/:email', getUserByEmail);
router.put('/modifyUser/:id', modifyUser);
router.delete('/deleteUser/:id', deleteUser)

export default router;