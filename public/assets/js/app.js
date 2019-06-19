$(document).ready(function() {
//reference
/* <div class="card shadow-sm">
  <h5 class="card-header">PlaceHolderTitle <a href="#" class="btn btn-primary float-right">Save Article</a></h5>
  <div class="card-body">
    <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa ea illum deserunt doloremque corporis vero molestias sint dignissimos voluptatum accusamus!</p> */

//save article button
// $("#saveBtn").on("click", function() {
//     console.log("working");

// })
//delete saved article button
// $("#").on("click", function() {
    
// })
//comment submission button
// $("#").on("click", function() {
    
// })
//scrape article button
$(document).on("click", "#scrape-btn", function() {
    console.log("scraping");
    
    $.getJSON("/all", function(results){
     res.json(results);
    })
})
//clear articles button
$("#clear-btn").on("click", function() {
    console.log("clearing");
})
//if no articles are saved then show suggestion to scrape 
});
