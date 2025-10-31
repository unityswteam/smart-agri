
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import connectDB from './config/db.js';
import mongoose from 'mongoose';

import categoryRoutes from './routes/categoryRoutes.js';
import userRoutes from './routes/userRoutes.js';
import roleRoutes from './routes/roleRoutes.js';
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/health', (req, res) => res.json({ status: 'ok' }));

const server = http.createServer(app);

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '127.0.0.1';


app.use('/api/categories', categoryRoutes);
app.use('/api/users', userRoutes);
app.use('/api/roles', roleRoutes);
const startServer = async () => {
  try {
    console.log('🔄 Connecting to database...');
    await connectDB();

    console.log('🔄 Waiting for database to be ready...');
    await new Promise((resolve) => setTimeout(resolve, 3000));

    server.listen(PORT, HOST, () => {
      console.log(`🚀 Server running on ${HOST}:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
