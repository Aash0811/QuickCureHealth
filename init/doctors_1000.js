import {mongoose} from 'mongoose';   
import {doctor} from '../models/doctor.js';
async function init() {
  try {
    await mongoose.connect('mongodb://localhost:27017/main', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
}
init();

