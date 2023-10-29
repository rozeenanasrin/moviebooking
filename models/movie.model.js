const mongoose = require("mongoose");

const Movie = mongoose.model(
  "Movie",
  new mongoose.Schema({
    movieid: Number,
    title: String,
    published: Boolean,
    released: Boolean,
    release_date: Number,
    publish_date: Number
  })
);

module.exports = Movie;

