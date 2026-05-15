import Temperature from '../Models/Temperature.model.js';
import Alerte from '../Models/Alerte.model.js';
import * as TemperatureService from '../Services/temperature.service.js';

export const getTemperatures = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            return res.status(401).json({ message: 'Utilisateur non authentifié' });
        }
        const temperatures = await Temperature.find({ user: userId });
        res.status(200).json(temperatures);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getSingleTemperature = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user?.id;
        if (!userId) {
            return res.status(401).json({ message: 'Utilisateur non authentifié' });
        }
        const temp = await Temperature.findById(id);
        if (!temp) {
            return res.status(404).json({ message: 'Température non trouvée' });
        }
        res.status(200).json(temp);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const addTemperature = async (req, res) => {
    try {
        const { temperature, question1, question2, question3, user } = req.body;
        const defineStatut = TemperatureService.determineStatut(temperature, question1, question2, question3);

        const temp = {
            user: user,
            temperature: temperature,
            question1: question1,
            question2: question2,
            question3: question3,
            statut: defineStatut.statut,
            alerteEnvoyee: defineStatut.alerteEnvoyee
        };

        const tempEntered = await Temperature.create(temp);
        const alerteData = TemperatureService.createAlerte(tempEntered, defineStatut);
        const alerte = await Alerte.create(alerteData);

        res.status(201).json({ temperature: tempEntered, alerte: alerte });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addTemperatureAvecQuestions= async (req, res) => {
    try {
        const { temperature, question1, question2, question3, user } = req.body;
        const defineStatut = TemperatureService.determineStatut(temperature, question1, question2, question3);

        const temp = {
            user, temperature, question1, question2, question3,
            statut: defineStatut.statut,
            alerteEnvoyee: defineStatut.alerteEnvoyee
        };

        const tempEntered = await Temperature.create(temp);
        
        if (defineStatut.statut !== 'Neutre') {
            const alerteData = TemperatureService.createAlerte(tempEntered, defineStatut);
            await Alerte.create(alerteData);
        }

        res.status(201).json({ success: true, temperature: tempEntered });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const updateTemperature = async (req, res) => {
    try {
        const { id } = req.params;
        const {temperature, question1, question2, question3} = req.body;
        const temp = await Temperature.findByIdAndUpdate(id, req.body);
        res.status(200).json(temp);

        if (!temp) {
            return res.status(404).json({ message: 'Température non trouvée' });
        }

        const defineStatut = TemperatureService.determineStatut(temperature, question1, question2, question3);

        temp.statut = defineStatut.statut;
        temp.alerteEnvoyee = defineStatut.alerteEnvoyee;
        await temp.save();
        const updatedTemp = await Temperature.findById(id);
        res.status(200).json(updatedTemp);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteTemperature = async (req, res) => {
    try {
        const { id } = req.params;
        const temp = await Temperature.findByIdAndDelete(id);
        if (!temp) {
            return res.status(404).json({ message: 'Température non trouvée' });
        }
        res.status(200).json({ message: 'Température supprimée avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};





