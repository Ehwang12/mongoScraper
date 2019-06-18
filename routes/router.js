var db = require("../models/index");
const express = require("express");
const app = express();

module.exports = function(app) {
    //routing to home page
    app.get("/", function(req, res) {
        res.render("index", {title: "MongoScraper Home"});
    });

    //scrape articles
    // app.get("/scrape", function(req, res){

    // })

    //routing to saved articles page
    // app.get("/savedArticles", function(req, res){

    // });

    //save article
    // app.post("/saved", function(req, res){

    // });

    //posting a comment
    // app.post("/comments", function(req, res){

    // });

    //editing comment
    // app.post("/comments/:id", function(req, res){

    // });
}


