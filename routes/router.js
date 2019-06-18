var db = require("../models/index");
const express = require("express");
const axios = require("axios");
const mongojs = require("mongojs");
var cheerio = require("cheerio");
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
    //routing to home page
    app.get("/", function(req, res) {
        res.render("index", {res, style: "style", title: "MongoScraper Home"});
    });

    //scrape articles
    app.get("/scrape", function(req, res){
        axios.get("").then(function(response) {
            var $ = cheerio.load(response.data);

            $(".title").each(function(i, element) {
                var title = $(element).children("a").text();
                var link = $(element).children("a").attr("href");

                if (title && link) {
                    db.scraped
                }
;            });
        });
    });

    //routing to saved articles page
    app.get("/savedArticles", function(req, res){
        res.render("articles", {res, style: "article", title: "Saved Articles"});
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


