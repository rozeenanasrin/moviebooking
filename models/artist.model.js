
const mongoose = require("mongoose");

const Artist = mongoose.model(
  "Artist",
  new mongoose.Schema({
    artistid: Number,
    first_name: String,
    last_name: String,
    wiki_url: String,
    profile_url: String,
    movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
  })
);

module.exports = Artist;

