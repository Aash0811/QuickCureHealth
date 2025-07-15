const mongoose = require('mongoose');

const testBookingSchema = new mongoose.Schema({
  test: { type: mongoose.Schema.Types.ObjectId, ref: 'Test', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  paymentStatus: { type: String, default: 'pending' }
});

module.exports = mongoose.model('TestBooking', testBookingSchema); 