const mongoose = require("mongoose");

const chatMessageSchema = new mongoose.Schema({
  chatRequest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ChatRequest",
    required: true,
  },
  senderName: {
    type: String,
    required: true,
  },
  senderModel: {
    type: String,
    enum: ["User", "Doctor"],
    required: true,
  },
  text: String,
  file: {
    fileName: String,
    fileData: String, // base64 data URL
  },
  timestamp: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("ChatMessage", chatMessageSchema);

