import User from '../Models/User.model.js';


export const createUser = async (userData) => {
    try {

        const newUser = new User(userData);
        const userExist =  await User.findOne ({email: newUser.email});
        if (userExist) {
            throw new Error('Utilisateur avec cet email déjà existant');
        }

        const savedUser = await newUser.save();
        return savedUser;
        
    } catch (error) {
        throw new Error("Erreur serveur internal");
    }

}


export const loginUser = async (email, password) => {
    try {
        const user = await User.findOne({ email, password });
        if (!user) {
            throw new Error('Email ou mot de passe incorrect');
        }
        return user;
    } catch (error) {
        throw new Error('Erreur serveur internal');
    }
}