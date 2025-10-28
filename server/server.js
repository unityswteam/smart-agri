const express = require('express');
const cors = require('cors');

require('dotenv').config();
const app = express();


// Middleware
app.use(express.json());
app.use(cors());


// --- Routes ---
// Health check route
//........

// Start server
const port = process.env.PORT || 5000;
const host = process.env.HOST || '127.0.0.1';
server.listen(port, host, () => {
  console.log(`Server listening on ${host}:${port}`);
});
