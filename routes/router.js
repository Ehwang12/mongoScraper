var db = require("../models/index");
const express = require("express");
const axios = require("axios");
var mongoose = require("mongoose");
var mongojs = require("mongojs");
var cheerio = require("cheerio");
var path = require("path");

const app = express();

//database config
var databaseURL= "scraper";
var collections = ["scrapedData"];

//connect mongojs config to db variable
var db = mongojs(databaseURL, collections);
db.on("error", function(error) {
    console.log("Database Error:", error);
});

module.exports = function(app) {
   

    //routing to saved articles page
    app.get("/savedArticles", function(req, res){
        res.render("articles", {title: "Saved Articles"});
        // res.render("articles", {res, style: "article", title: "Saved Articles"})
        // .then(function(articles){
        //     res.json(articles);
        // })
    });

    //save article
    // app.post("/saved", function(req, res){

    // });

    //clear article from saved page
    //app.post("/clearArticle", function(req, res){});

    //posting a comment
    // app.post("/comments", function(req, res){

    // });

    //deleting comment
    // app.post("/comments/:id", function(req, res){

    // });

}


