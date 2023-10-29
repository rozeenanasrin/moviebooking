
const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    userid: Number,
    email: String,
    first_name: String,
    last_name: String
    
  })
);

module.exports = User;
