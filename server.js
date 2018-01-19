// requirements
var express = require("express");
var exphbs  = require('express-handlebars');
//middleware
var bodyParser = require('body-parser')
//express setup
var app = express();
var PORT = process.env.PORT || 3000;
//static route for assets such as css and js
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
//handlebars setup
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
//contoller for routes
var routes = require("./controller/lift-overController.js");

app.use("/", routes);

app.listen(PORT);