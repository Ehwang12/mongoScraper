const express = require("express");
const app = express();
const expbs = require("express-handlebars");
const mongoose = require("mongoose");

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", expbs({defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);


//routing
app.get("/", function(req, res) {
    res.render("index", {title: "MongoScraper Home"});
})

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT); 
});