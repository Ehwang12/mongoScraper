const express = require('express');
const app = express();
const expbs = require('express-handlebars');

var PORT = process.env.PORT || 8080;

app.engine('handlebars', expbs({defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//routing
app.get("/", function(req, res) {
    res.render("main")
})

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT); 
});