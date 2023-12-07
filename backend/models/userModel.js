const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  password: String,
  email: String,
  contact: String,
  profile: String,
  college: String,
  posts: [String],
  shortlisted: [String]

});

// Hash and salt the password before saving it to the database
userSchema.pre('save', async function (next) {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(this.password, saltRounds);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

// Define a method to compare passwords during login
userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw error;
  }
};

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;