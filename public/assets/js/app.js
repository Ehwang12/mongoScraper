$(document).ready(function() {

// save article button
$("#saveBtn").on("click", function() {
    console.log("Would have saved to saved articles page");
})

// delete saved article button
$("#clearOne").on("click", function() {
    console.log("delete article") 
})

// comment modal button
$('#comment-mod').on('show.bs.modal', function (event) {
  console.log("this is working")
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text("Add a Comment")
  modal.find('.modal-body input').val()
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
