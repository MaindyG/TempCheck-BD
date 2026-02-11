const express = require('express');
const { createUser, getAllUsers, getUserByEmail, modifyUser, deleteUser } = require ('../Controllers/UserController.js');
const { VerifyToken } =  require('../Middleware/AuthMiddleware.js');


const router = express.Router();

router.post('/newUser', createUser);
router.get('/allUsers', VerifyToken, getAllUsers);
router.get('/user/:email', getUserByEmail);
router.put('/modifyUser/:id', modifyUser);
router.delete('/deleteUser/:id', deleteUser)


module.exports = router;

