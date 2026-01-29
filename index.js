import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './src/Config/db.js'; 
import userRoutes from './src/Routes/userRoutes.js';

dotenv.config();

const app = express();


connectDB(); 

app.use(express.json());
app.use(cors());


app.use("/api/auth", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});