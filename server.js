const http = require('http');
const express = require("express");
const app = express();
const db = require("./models"); // Make sure the path is correct

const mongoose = require("mongoose");


const server = http.createServer((req, res) => {
  if (req.url === '/movies') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('All Movies Data in JSON format from Mongo DB');
  } else if (req.url === '/genres') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('All Genres Data in JSON format from Mongo DB');
  } else if (req.url === '/artists') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('All Artists Data in JSON format from Mongo DB');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

mongoose
  .connect(db.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
    // Start your Express server here if desired
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// Additional server setup and routes can go here


const port = 9000;

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

