const express = require('express');
const router = express.Router();
const seedData = require('../seed/seedData');
const accommodationController = require('../controllers/accommodationController');

router.post('/accommodations', async (req, res) => {
  try {
    const newAccommodation = await accommodationController.createAccommodation(req.body);
    res.status(201).json(newAccommodation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/accommodations', async (req, res) => {
  try {
    const accommodations = await accommodationController.getAllAccommodations();
    res.json(accommodations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/accommodations/:id', async (req, res) => {
  try {
    const accommodation = await accommodationController.getAccommodationById(req.params.id);
    if (!accommodation) {
      return res.status(404).json({ error: 'Accommodation not found' });
    }
    res.json(accommodation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/accommodations/:id', async (req, res) => {
  try {
    const updatedAccommodation = await accommodationController.updateAccommodationById(
      req.params.id,
      req.body
    );
    if (!updatedAccommodation) {
      return res.status(404).json({ error: 'Accommodation not found' });
    }
    res.json(updatedAccommodation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/accommodations/:id', async (req, res) => {
  try {
    const result = await accommodationController.deleteAccommodationById(req.params.id);
    if (!result) {
      return res.status(404).json({ error: 'Accommodation not found' });
    }
    res.json({ message: 'Accommodation deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/seed', async (req, res) => {
  try {
    await seedData();
    res.status(201).json({ message: 'Sample data seeded successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
