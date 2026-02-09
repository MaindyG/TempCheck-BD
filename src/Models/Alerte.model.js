
const mongoose = require('mongoose');

const AlerteSchema = new mongoose.Schema({
    typeAlerte: {
        type: String,
        required: true
    },
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
    },
    temperature: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Temperature',
        required: true,
    }
}

);

const Alerte = mongoose.model('Alerte', AlerteSchema);

module.exports = Alerte;