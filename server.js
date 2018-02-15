var express=require("express");
//var method_override=require("method_override");
var bodyParser= require("body-parser");

var PORT = process.env.PORT || 3010;
var app=express();

//display css and other static content from the public folder
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//set handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import routes and give access to server
var routes=require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});