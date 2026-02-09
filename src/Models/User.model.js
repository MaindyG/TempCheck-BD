
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    contact_urgence: {
        type: Number,
        required: false
    },
    fichesMedicales: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FicheMedical'
    }]
},
);

const User = mongoose.model('User', UserSchema);

module.exports = User;