const express = require("express");
const db = require("./models");
fs = require("fs"),
path = require("path"),
cors = require("cors");  


const app = express();

bodyParser = require("body-parser");



db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


// app.get("/movies", (req, res) => {
//     res.send("All Movies Data in JSON format from Mongo DB");
// })
// app.get("/genres", (req, res) => {
//     res.send("All Genres Data in JSON format from Mongo DB");
// })
// app.get("/artists", (req, res) => {
//     res.send("All Artists Data in JSON format from Mongo DB");
// })



require("./routes/movie.routes")(app);
require("./routes/artist.routes")(app);
require("./routes/genre.routes")(app);
require("./routes/user.routes")(app)

app.listen(9000, () => {
    console.log("Listening on port 9000");
})


const getAllUsers = async() => {
    const users = await db.users.find({});
    console.log(users);
}

getAllUsers();
