
import mongoose from 'mongoose';

const TemperatureSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    Temperature: {
        type: Number,
        required: false,
    },
    Statut: {
        type: String,
        required: true,
        default: "Aucune"
    },
    },
    {
        timestamps: true
    }
);

const Temperature = mongoose.model('Temperature', TemperatureSchema);
export default Temperature;