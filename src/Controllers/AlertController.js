import * as AlerteService from '../Services/AlerteService.js';


export const createAlerte = async (req , res ) => {
    try {
        const alertData = req.body;
        const newAlert = await AlerteService.createAlert(alertData);
        res.status(200).json(newAlert);
        
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}


export const getAlertsByUser = async ( req, res) => {
    try {

        const userId = req.params.userId;
        const alerts =  await AlerteService.getAlertsByUser(userId);
        res.status(200).json(alerts);
        
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

export const deleteAlerts = async (req, res) => {

    try {
        const alertId = req.params.alertId;
        const deletedAlert = await AlerteService.deleteAlert(alertId);
        res.status(200).json({message: 'Alerte supprimée avec succès', alert: deletedAlert});        
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}