import mongoose from 'mongoose';

const ficheMedicalSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: false
    },
    poids: {
        type: Number,
        required: false,
    },
    allergies: {
        type: String,
        required: true,
        default: "Aucune"
    },
    conditions: {
        type: String,
        required: true,
        default: "Aucune"
    }}
);

const FicheMedical = mongoose.model('FicheMedical', ficheMedicalSchema);

export default FicheMedical;