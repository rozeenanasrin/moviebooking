
const Movie = require('../models/Movie'); 

exports.findAllMovies = async (req, res) => {
  try {
    const { status } = req.query;
    
    const movies = await Movie.find({ status }); // Adjust the query as needed
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching movies' });
  }
};


exports.findOne = async (req, res) => {
  try {
    const { movieId } = req.params;
        const movie = await Movie.findById(movieId); 
    if (!movie) {
      res.status(404).json({ error: 'Movie not found' });
    } else {
      res.json(movie);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching movie' });
  }
};

// Find shows of a specific movie by its ID
exports.findShows = async (req, res) => {
  try {
    const { movieId } = req.params;
        res.json({ message: `Get shows for movie with ID ${movieId}` });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching shows' });
  }
};
