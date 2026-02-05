import User from '../Models/User.model.js';


export const createUser = async (userData) => {
    const newUser = new User(userData);
    const userExist = await User.findOne({ email: newUser.email });
    if (userExist) {
        throw new Error('Utilisateur avec cet email déjà existant');
    }
    return await newUser.save();
}


export const getUserByEmail = async (email) => {
    return await User.findOne({ email });
}

export const getAllUsers = async () => {
    return await User.find();
}

export const modifyUser = async (userId, updateData) => {
    return await User.findByIdAndUpdate(userId, updateData, { new: true });
}

export const deleteUser = async (userId) => {
    return await User.findByIdAndDelete(userId);
}