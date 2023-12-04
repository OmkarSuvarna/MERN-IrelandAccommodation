const mongoose = require('mongoose');

const accommodationSchema = new mongoose.Schema({
  eircode: String,
  streetName: String,
  county: String,
  accommodationType: String,
  durationType: String,
  fromDate: Date,
  toDate: Date,
  furnished: Boolean,
  lookingFor: String,
  bedroom: Number,
  bath: Number,
  kitchen: Boolean,
  livingRoom: Boolean,
  nearby: [String],
  rent: Number,
  deposit: Number,
  billsIncluded: Boolean,
  roomSharing: Boolean,
  bills: [String],
  roomSharingNumber: Number,
  contactNumber: String,
  email: String,
});

const accommodationModel = mongoose.model('Accommodation', accommodationSchema);

module.exports = accommodationModel;