require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/Config/db');

const app = express();


connectDB(); 

app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});