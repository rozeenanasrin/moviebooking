
const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    userid: Number,
    email: String,
    
  })
);

module.exports = User;
