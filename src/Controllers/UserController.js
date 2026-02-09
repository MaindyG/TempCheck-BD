import * as UserService from '../Services/UserService.js';

export const createUser = async (req, res) => {
    try {
        const userData = req.body;
        const newUser = await UserService.createUser(userData);
        res.status(200).json(newUser);
        
    } catch (error) {
        res.status(500).json ({message: error.message});
        
    }
}


export const getUserByEmail = async (req,res) => {
    try {
        const email = req.params.email;
        const user = await UserService.getUserByEmail(email);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json ({message: error.message});
    }
}


export const getAllUsers = async (req, res) => {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);  
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

export const modifyUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const updateData = req.body;
        const updatedUser = await UserService.modifyUser(userId, updateData);
        res.status(200).json(updatedUser);
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await UserService.deleteUser(userId);
        res.status(200).json(deletedUser);
        if (!deletedUser) {
            res.status(404).json({ message: 'Utilisateur non trouvé' });
        }
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}