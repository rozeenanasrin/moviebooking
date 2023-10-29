
const Artist = require('../models/Artist'); 

exports.findAllArtists = async (req, res) => {
  try {
    const artists = await Artist.find(); 
    res.json(artists);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching artists' });
  }
};
