/*
const Artist = require('../models/Artist'); 

exports.findAllArtists = async (req, res) => {
  try {
    const artists = await Artist.find(); 
    res.json(artists);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching artists' });
  }
};*/

var express = require('express');
const db = require("../models");
const Artist = db.artists;

async function findAllArtists(req,res){
    const data= await db.artists.find({});
    //console.log(data);
    res.json(data);
}

module.exports={
    findAllArtists
}

