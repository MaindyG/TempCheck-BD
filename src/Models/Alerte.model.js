
import mongoose from 'mongoose';

const AlerteSchema = new mongoose.Schema({
   message: {
        type: String,
        required: false
    },
    date_envoie: {
        type: Date,
        required: false 
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    temperature: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Temperature',
        required: true,
    }
}

);

const Alerte = mongoose.model('Alerte', AlerteSchema);

export default Alerte;