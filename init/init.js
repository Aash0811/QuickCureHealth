
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Doctor = require('../models/doctor.js');

async function seedDoctors() {
  await mongoose.connect('mongodb://localhost:27017/main', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('Database connected successfully');

  const doctorsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'main.doctors.json'), 'utf-8'));

  for (const doc of doctorsData) {
    try {

      const { _id, password, __v, ...doctorFields } = doc;

      await Doctor.register(new Doctor(doctorFields), 'doctor@123');
      console.log('Inserted doctor:', doctorFields.name);
    } catch (err) {
      if (err.code === 11000) {
        console.log('Duplicate doctor skipped:', doc.name);
      } else if (err.name === 'UserExistsError') {
        console.log('Doctor already exists:', doc.name);
      } else {
        console.error('Error inserting doctor:', doc.name, err.message);
      }
    }
  }
  mongoose.disconnect();
}

seedDoctors();
