import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './src/Config/db.js'; 
import authRoutes from './src/Routes/AuthRoutes.js';
import userRoutes from './src/Routes/UserRoutes.js';
import alertRoutes from './src/Routes/AlertRoutes.js';

dotenv.config();

const app = express();


connectDB(); 

app.use(express.json());
app.use(cors());


app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/alerts", alertRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});