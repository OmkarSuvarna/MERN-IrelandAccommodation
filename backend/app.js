require('dotenv').config();
const express = require('express');
const cors = require('cors');  // Add this line
const mongoose = require('./db/mongoose');
const accommodationRoutes = require('./routes/accommodationRoutes');
const userRoutes = require('./routes/userRoutes');
// const googleMapsRoutes = require('./routes/googleMapRoutes');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

app.use('/api', accommodationRoutes);
app.use('/api', userRoutes);
// app.use('/api', googleMapsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
