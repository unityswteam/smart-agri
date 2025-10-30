// const express = require('express');
// const cors = require('cors');
// const http = require('http');

// require('dotenv').config();
// const app = express();


// // Middleware
// app.use(express.json());
// app.use(cors());
// const server = http.createServer(app);

// // --- Routes ---
// // Health check route
// //........

// // Start server
// const port = process.env.PORT || 5000;
// const host = process.env.HOST || '127.0.0.1';
// server.listen(port, host, () => {
//   console.log(`Server listening on ${host}:${port}`);
// });









// const express = require('express');
// const cors = require('cors');
// const http = require('http');
import cors from 'cors';
// const dotenv=require('dotenv');
import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
// const mongoose = require('mongoose');
import connectDB from './config/db.js';
// const connectDB = require('./config/db.js');
import mongoose from 'mongoose';
// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// --- Routes ---
// Health check route
app.get('/health', (req, res) => res.json({ status: 'ok' }));

const server = http.createServer(app);

// Configuration
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '127.0.0.1';

const startServer = async () => {
  try {
    console.log('🔄 Connecting to database...');
    await connectDB();

    // Wait for database to be fully ready
    console.log('🔄 Waiting for database to be ready...');
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Start HTTP server
    server.listen(PORT, HOST, () => {
      console.log(`🚀 Server running on ${HOST}:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
