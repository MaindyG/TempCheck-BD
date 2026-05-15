const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL || process.env.MONGODB_URI);
    
    console.log(`MongoDB Connecté: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Erreur: ${error.message}`);
  }
};

module.exports = connectDB;
