require('dotenv').config();
const express = require('express');
const mongoose = require('./db/mongoose');
const accommodationRoutes = require('./routes/accommodationRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', accommodationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
