
const mongoose = require("mongoose");

const Genre = mongoose.model(
  "Genre",
  new mongoose.Schema({
    genreid: Number,
    genre: String,
  })
);

module.exports = Genre;
