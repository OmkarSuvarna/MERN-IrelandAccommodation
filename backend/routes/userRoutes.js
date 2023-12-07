const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const seedData = require('../seed/userSeedData');

router.post('/users', async (req, res) => {
  try {
    const newUser = await userController.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user', details: error.message });
  }
});

router.get('/users', async (req, res) => {
  try {
    const users = await userController.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve users', details: error.message });
  }
});

router.get('/users/:id', async (req, res) => {
  try {
    const user = await userController.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve user', details: error.message });
  }
});

router.put('/users/:id', async (req, res) => {
  try {
    const updatedUser = await userController.updateUserById(req.params.id, req.body);
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user', details: error.message });
  }
});

router.delete('/users/:id', async (req, res) => {
  try {
    const result = await userController.deleteUserById(req.params.id);
    if (!result) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user', details: error.message });
  }
});

router.post('/userseed', async (req, res) => {
  try {
    await seedData();
    res.status(201).json({ message: 'Sample data seeded successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to seed sample data', details: error.message });
  }
});

router.post('/users/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await userController.authenticateUser(email, password);
  
      if (!user) {
        return res.status(401).json({ error: 'Authentication failed' });
      }
      const token = await authMiddleware.generateAuthToken(user);
      res.json({ user, token });
    } catch (error) {
      res.status(500).json({ error: 'Failed to authenticate user', details: error.message });
    }
  });

module.exports = router;
