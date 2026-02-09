require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/Config/db');
const Temperature = require('./src/Models/Temperature.model');

const temperatureRoute = require('./src/Routes/temperature.route');
const app = express();
app.use(express.json());

connectDB(); 

app.use(express.json());
app.use(cors());

app.get('/',(req, res) => {
  res.send('Bienvenue sur l\'API TempCheck');
});

app.use('/api/temperature', temperatureRoute);




// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});