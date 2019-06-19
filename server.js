//instantiate
const express = require("express");
const app = express();
const expbs = require("express-handlebars");
const mongoose = require("mongoose");

//scraping tools
const axios = require("axios");
const cheerio = require("cheerio");

//set up port
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set up handlebars
app.engine("handlebars", expbs({defaultLayout: "main" }));
app.set("view engine", "handlebars");

//static directory
app.use(express.static("public"));

//connect to mongoDB
mongoose.connect("mongodb://localhost/mongoScraper", { useNewUrlParser: true});

//requiring models for syncing
var db = require("./models");

//requiring routes
require("./routes/router")(app);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT); 
});