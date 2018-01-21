// requirements
var express = require("express");
var exphbs  = require('express-handlebars');
var path = require("path");
var methodOverride = require('method-override');
//middleware
var bodyParser = require('body-parser')
//express setup
var app = express();
var PORT = process.env.PORT || 3000;

// Requiring our models for syncing
var db = require(path.join(__dirname, '/models'));

// Serve static content for the app from the 'public' directory
//Static Route for assets such as css and js
//The process.cwd() method returns the current working directory of the Node.js process.
app.use(express.static(process.cwd() + '/public'));

// Override with POST having ?_method=PUT
app.use(methodOverride('_method'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
//handlebars setup
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
//contoller for routes
var routes = require("./routes/html-routes.js")(app);
var driveApi = require("./routes/driver-api-routes.js")(app);
var userApi = require("./routes/user-api-routes.js")(app);
var orgApi = require("./routes/orginazation-api-routes.js")(app);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
});