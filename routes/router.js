var db = require("../models/index");
const express = require("express");
const axios = require("axios");
const mongojs = require("mongojs");
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
    //routing to home page
    app.get("/", function(req, res) {
        res.render("index", {res, style: "style", title: "MongoScraper Home"});
    });

    //scrape articles
    app.get("/scrape", function(req, res){
        
        axios.get("https://www.nytimes.com/topic/subject/rock-climbing").then(function(response) {
            //capturing html into cheerio and saving as variable
            var $ = cheerio.load(response.data);//change

            //an empty array to save data that we'll scrape
            var results = [];

                $("article").each(function(i, element){

                    var title = $(element).find("h2").text();
                    title = title.split(" ").join(" ").split("\n").join(" ").trim();

                    var link = $(element).find("a").attr("href");
                    var image = $(element).find("img").attr("src");
                    var summary = $(element).find(".summary").text();
                    //r&d how to refine search to just class summary

                    results.push({
                        title: title,
                        link: link,
                        image: image,
                        summary: summary
                    });
                });
               console.log(results);
            })

    });

    //routing to saved articles page
    app.get("/articles", function(req, res){
        console.log(res);
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


