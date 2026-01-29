import * as userService from '../Services/UserService.js';

export const registerUser = async (req, res) => {
    try {

        const userData = req.body;
        const newUser = await userService.createUser(userData);
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const LoginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userService.loginUser(email, password);
        res.status(200).json(user);
    } catch (error) {
        throw new Error(error.message);
    }
};