import User from '../Models/User.model.js';
import bcrypt from 'bcryptjs';


export const registerUser = async (userData) => {
    try {

        const newUser = new User(userData);
        const userExist =  await User.findOne ({email: newUser.email});
        if (userExist) {
            throw new Error('Utilisateur avec cet email déjà existant');
        }

        const hashedPassword = await bcrypt.hash(newUser.password, 10);
        newUser.password = hashedPassword;

       


        const savedUser = await newUser.save();
        return savedUser;
        
    } catch (error) {
        throw error
    }

}


export const loginUser = async (email, password) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('Email incorrect');
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            throw new Error('mot de passe incorrect');
        }
        return user;
    } catch (error) {
        throw error;
    }
}