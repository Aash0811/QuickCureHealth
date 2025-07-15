const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: String,
  password: String,
  specialization: String,
  city: String,
  rating: Number,
  hospitalName: String,
  study: String,
  workExperience: Number,
  photo:String
});

doctorSchema.plugin(passportLocalMongoose);

const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;
