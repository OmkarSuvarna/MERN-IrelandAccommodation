const mongoose = require('mongoose');

const accommodationSchema = new mongoose.Schema({
  streetName: String,
  county: String,
  eircode: String,
  rent: Number,
  deposit: Number,
  fromDate: Date,
  toDate: Date,
  accommodationType: String,
  lookingFor: String,
  livingRoomShared: Boolean,
  kitchenShared: Boolean,
  bedroom: Number,
  bath: Number,
  sutiableFor: String,
  durationType: String,
  furnished: Boolean,
  billsIncluded: Boolean,
  bills: [String],
  roomSharing: Boolean,
  roomSharingNumber: Number,
  colleges: [String],
  store: [String],
  fastFood: [String],
  contactNumber: String,
  email: String,
  description: String,
  image: [String]
});

const accommodationModel = mongoose.model('Accommodation', accommodationSchema);

module.exports = accommodationModel;