import * as AuthService from '../Services/AuthService.js';
import  jwt  from 'jsonwebtoken';

export const registerUser = async (req, res) => {
    try {

        const userData = req.body;
        const newUser = await AuthService.registerUser(userData);
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const LoginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await AuthService.loginUser(email, password);
        const token = jwt.sign({id: user._id},process.env.JWT_SECRET, {expiresIn: '1d'});

        const userLog = user.toObject();
        delete userLog.password;
        res.status(200).json({message: 'Connexion reussie' , token, user: userLog   });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};