
// app/routes/genre.routes.js
const express = require("express");
const router = express.Router();
const genreController = require("../controllers/genre.controller");

// GET /genres
router.get("/", genreController.findAllGenres);

module.exports = router;
