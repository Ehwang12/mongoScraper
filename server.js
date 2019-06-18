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

                // db.Article.create(results).then(function(dbArticle){
                //     console.log(dbArticle);
                // }).catch(function(err){
                //     console.log(err);
                    
                // })
            });
        //    console.log(results);
           res.json(results);
        })
        
});

app.get("/all", function(req, res) {
    db.Article.find({}, function(err, data){
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    })
})

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT); 
});