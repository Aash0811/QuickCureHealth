const testBookingSchema = new mongoose.Schema({
  testName: String,
  price: String,
  fullName: String,
  email: String,
  phone: String,
  age: Number,
  date: String,
  time: String
});

const TestBooking = mongoose.model("TestBooking", testBookingSchema);
