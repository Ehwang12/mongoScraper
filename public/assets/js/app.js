$(document).ready(function() {

// save article button
$("#saveBtn").on("click", function() {
    console.log("Would have saved to saved articles page");
})

// delete saved article button
$("#clearOne").on("click", function() {
    console.log("delete article") 
})

// comment submission button
$("#comt-btn").on("click", function() {
    console.log("Comment on article")
})

//scrape article button
$(document).on("click", "#scrape-btn", function() {
    console.log("scraping");
    
    $.ajax({
      method: "GET",
      URL: "/all"
    }).then(function(data){
      console.log(data);
    }).catch(function(err){
      if(err) throw err;
    })
})
//clear articles button
$("#clear-btn").on("click", function() {
    console.log("clearing");
})
//if no articles are saved then show suggestion to scrape 
});
