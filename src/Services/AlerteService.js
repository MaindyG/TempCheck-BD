import Alert from '../Models/Alerte.model.js';


export const createAlert = async (alertData) => {

    const newAlert = new Alert(alertData);
    return await newAlert.save();
}

export const getAlertsByUser = async(userId) => {
    if(!userId) {
        throw new Error('User Existe pas');
    }
    return await Alert.find({userId: userId});

    
}


export const deleteAlert = async(AlertId) => {
    if(!AlertId) {
        throw new Error('Alerte n existe pas');
    }
    return await Alert.findByIdAndDelete(AlertId);
}