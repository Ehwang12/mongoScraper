
// Grab the articles as a json
$.getJSON("/scrape", function(data) {
  // For each one
  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
    // Display the apropos information on the page
    // $("#cardHeader").append("<h5 class='card-header'>" + data[i].title + "<button type='button' class='btn btn-success float-right' id='clearArticle'>Clear Article</button><button type='button' class='btn btn-primary float-right mr-2' id='saveArticle'>Save Article</button></h5>")
    // $(".card-body").append("<p class='card-text' data-id='" + data[i]._id + "'>" + data[i].summary + "</p>");
  }
});

//save article button
// $("#saveArticle").on("click", function() {

// })
//delete saved article button
// $("#clearDBA").on("click", function() {
    
// })
//comment submission button
// $("#submit").on("click", function() {
    
// })
//scrape article button
// $(document).on("click", "#scrape-btn", function() {
//     $.ajax({
//       method: "GET",
//       url: "/scrape"
//     }).then(function(data){
//       res.json(data);
//     })
// })
//clear articles button
// $("#clearArticles").on("click", function() {
    
// })
//if no articles are saved then show suggestion to scrape 
// if () {

// } else {

// }