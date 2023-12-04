const Accommodation = require('../models/accomodationModel');

const createAccommodation = async (accommodationData) => {
  try {
    const newAccommodation = new Accommodation(accommodationData);
    const savedAccommodation = await newAccommodation.save();
    return savedAccommodation;
  } catch (error) {
    throw error;
  }
};

const getAllAccommodations = async () => {
  try {
    const accommodations = await Accommodation.find();
    return accommodations;
  } catch (error) {
    throw error;
  }
};

const getAccommodationById = async (id) => {
  try {
    const accommodation = await Accommodation.findById(id);
    return accommodation;
  } catch (error) {
    throw error;
  }
};

const updateAccommodationById = async (id, updatedData) => {
  try {
    const accommodation = await Accommodation.findByIdAndUpdate(id, updatedData, { new: true });
    return accommodation;
  } catch (error) {
    throw error;
  }
};

const deleteAccommodationById = async (id) => {
  try {
    const result = await Accommodation.findByIdAndDelete(id);
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createAccommodation,
  getAllAccommodations,
  getAccommodationById,
  updateAccommodationById,
  deleteAccommodationById,
};
