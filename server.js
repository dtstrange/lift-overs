// requirements
var express = require("express");
var exphbs  = require('express-handlebars');
//middleware
var bodyParser = require('body-parser')
//express setup
var app = express();
var PORT = process.env.PORT || 3000;

// Requiring our models for syncing
var db = require("./models");

//static route for assets such as css and js
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
//handlebars setup
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
//contoller for routes
var routes = require("./routes/html-routes.js");
var driveApi = require("./driver-api-routes.js");
var userApi = require("./user-api-routes.js");
var orgApi = require("./orginazation-api-routes.js");

app.use("/", routes);
app.use("/api/driver", driveApi);
app.use("/api/user", userApi);
app.use("/api/org", orgApi);

//app.listen(PORT);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
});