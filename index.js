require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');
const authRoutes = require('./src/Routes/AuthRoutes')
const userRoutes = require('./src/Routes/UserRoutes');
const alertRoutes = require('./src/Routes/AlertRoutes');
const temperatureRoute = require('./src/Routes/Temperature.route');
const app = express();
app.use(express.json());

connectDB();
app.use(express.json());
app.use(cors());

app.get('/',(req, res) => {
  res.send('Bienvenue sur l\'API TempCheck');
});


app.use('/api/temperature', temperatureRoute);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/alerts", alertRoutes);





const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});