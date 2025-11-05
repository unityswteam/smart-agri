
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import connectDB from './config/db.js';
import mongoose from 'mongoose';

import categoryRoutes from './routes/category-routes.js';
import userRoutes from './routes/user-routes.js';
import roleRoutes from './routes/role-routes.js';
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/health', (req, res) => res.json({ status: 'ok' }));

const server = http.createServer(app);
// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('✅ MongoDB connected');

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
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  });
  