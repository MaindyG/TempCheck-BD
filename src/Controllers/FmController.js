import * as FmService from '../Services/FmService.js';


export const createFicheMedical = async (req, res) => {
    try {
        const fmData = req.body;
        const newFm = await FmService.createFicheMedical(fmData);
        res.status(200).json(newFm);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const getFicheMedicalByUser = async (req, res) => {
    try {
        const userId = req.params.userId
        const fm = await FmService.getFicheMedicalByUser(userId);
        res.status(200).json(fm);

    }catch (error) {
        res.status(500).json({ error: error.message });
    }


}
