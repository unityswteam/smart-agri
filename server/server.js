const express = require('express');
const cors = require('cors');
const http = require('http');

require('dotenv').config();
const app = express();


// Middleware
app.use(express.json());
app.use(cors());
const server = http.createServer(app);

// --- Routes ---
// Health check route
//........

// Start server
const port = process.env.PORT || 5000;
const host = process.env.HOST || '127.0.0.1';
server.listen(port, host, () => {
  console.log(`Server listening on ${host}:${port}`);
});
