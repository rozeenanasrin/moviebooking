
const Genre = require('../models/Genre'); 

// Find all genres
exports.findAllGenres = async (req, res) => {
  try {
    
    const genres = await Genre.find();
    res.json(genres);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching genres' });
  }
};
