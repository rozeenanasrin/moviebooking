/*
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
*/
var express = require('express');
const db = require("../models");
const Genre = db.genres;

async function findAllGenres(req,res){
    const data= await db.genres.find({});
    //console.log(data);
    res.json(data);
}

module.exports={
    findAllGenres
} 
