const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const createUser = async (userData) => {
  try {
    const newUser = new User(userData);
    const savedUser = await newUser.save();
    return savedUser;
  } catch (error) {
    throw error;
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    throw error;
  }
};

const updateUserById = async (id, updatedData) => {
  try {
    const user = await User.findByIdAndUpdate(id, updatedData, { new: true });
    return user;
  } catch (error) {
    throw error;
  }
};

const deleteUserById = async (id) => {
  try {
    const result = await User.findByIdAndDelete(id);
    return result;
  } catch (error) {
    throw error;
  }
};

const authenticateUser = async (email, password) => {
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return null;
    }

    const isPasswordMatch = await user.comparePassword(password);

    if (!isPasswordMatch) {
      return null;
    }

    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  authenticateUser
};
