require('dotenv').config();
const express = require('express');
const mongoose = require('./db/mongoose');
const accommodationRoutes = require('./routes/accommodationRoutes');
var cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Accommodation Routes
app.use('/api', accommodationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
