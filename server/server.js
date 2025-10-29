const express = require('express');
const cors = require('cors');
const http = require('http');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

const server = http.createServer(app);
// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('✅ MongoDB connected');

    const PORT = process.env.PORT || 3000;
    // Use server.listen instead of app.listen
    server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error('❌ MongoDB connection error:', err));
  








