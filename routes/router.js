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
            

                $("article").each(function(i, element){
                    var results = {};
                    
                    var title = $(this).find("h2").text();
                    title = title.split(" ").join(" ").split("\n").join(" ").trim();

                    var link = $(this).find("a").attr("href");
                    var image = $(this).find("img").attr("src");
                    var summary = $(this).find(".summary").text();
                    //r&d how to refine search to just class summary
                    
                    results.push({
                        title: title,
                        link: link,
                        image: image,
                        summary: summary
                    })

                    db.Article.create(results).then(function(dbArticle){
                        console.log(dbArticle);
                    }).catch(function(err){
                        console.log(err);
                        
                    })
                });
            //    console.log(results);
               res.json(results);
            // res.redirect("/");
            })
            
    });

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


