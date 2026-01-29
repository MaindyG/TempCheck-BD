
import mongoose from 'mongoose';

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
    role: {
        type: String,
        enum: ['parent', 'enfant', 'admin'],
        default: 'parent'
    },
    contact_urgence: {
        type: Number,
        required: false
    },
    fichesMedicales: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FicheMedical',
        required: false
    }]
},
);

const User = mongoose.model('User', UserSchema);

export default User;