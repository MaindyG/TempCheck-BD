const FicheMedical = require('../Models/FicheMedical.model');



export const createFicheMedical = async (data) => {
    const newFicheMedical = new FicheMedical(data);
    const ficherExistant = await FicheMedical.findOne({user: newFicheMedical.user});

    if(fichierExistant) {
        throw new Error('Fiche medical deja existant');
    }
    return await newFicheMedical.save();
}


export const getFicheMedicalByUser = async (userId) => {
    if( !userId) {
        throw new Error('User existe pas');
    }
    return await FicheMedical.findOne({user: userId});
}