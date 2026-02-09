
const mongoose = require('mongoose');

const TemperatureSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    },
    temperature: {
        type: Number,
        required: true,
    },

    statut: {
        type: String,
        enum: ['Neutre', 'À surveiller', 'Urgent'],
        required: true,
        default: "Aucune"
    },
    question1: {
        type: Boolean,
        required: false,
        default: false,
    },
    question2: {
        type: Boolean,
        required: false,
        default: false,
    },
    question3: {
        type: Boolean,
        required: false,
        default: false,
    },
    alerteEnvoyee: {
        type: String,
        required: false,
    }
    }, {
    timestamps: true
}
);

const Temperature = mongoose.model('Temperature', TemperatureSchema);
module.exports = Temperature;