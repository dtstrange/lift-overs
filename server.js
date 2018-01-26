// requirements
require("dotenv").config();
var express = require("express");
var exphbs = require('express-handlebars');
var path = require("path");
var cookieParser = require('cookie-parser')

//var morgan = require('morgan');
var jwt = require("jsonwebtoken");
//var unauthRoutes = require("./routes/unauth-routes.js");
var authRoutes = require("./routes/auth-routes.js");
var routes = require("./routes/html-routes.js");
var driveApi = require("./routes/driver-api-routes.js");
var userApi = require("./routes/user-api-routes.js");
var orgApi = require("./routes/orginazation-api-routes.js");
//middleware
var bodyParser = require('body-parser');
var dummyContent = [
    {
        Test: "dummy content text"
    }
];
// set up logger
//app.use(morgan('dev'));
//express setup
var app = express();
var PORT = process.env.PORT || 3000;
var isDev = process.env.NODE_ENV === 'development';
// Requiring our models for syncing
var db = require(path.join(__dirname, '/models'));

// Serve static content for the app from the 'public' directory
//Static Route for assets such as css and js
//The process.cwd() method returns the current working directory of the Node.js process.
app.use(express.static(process.cwd() + '/public'));
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
//handlebars setup
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
//contollers for routes

//path for main page with registration
app.get("/", function (req, res) {
    var hbsObject = {
        name: 1
    };
    res.render("index", hbsObject);
});

//path for login page
app.get("/login", function (req, res) {
    var hbsObject = {
        name: 1
    };
    res.render("login", hbsObject);
});

//app.use("/", unauthRoutes);
app.use("/auth", authRoutes);

var auth = function (req, res, next) {
    try {
        console.log("COOKIE AUTH", req.get("Authorization"));
    
        var token = req.cookies.token || req.get("Authorization").split(" ")[1]
        console.log(token);
        try {
            console.log("we trying")
            jwt.verify(token, process.env.JWT_SECRET);
            next();
        } catch (err) {
            console.log("we failin", err)
            throw new Error("Not Authenticated");
        }
    } catch (err) {
        console.log("something is really wrong", err)
        throw new Error("Not Authenticated");
    }

}
app.use(auth);
app.use("/user", routes);
app.use("/api/user", userApi);
app.use("/api/driver", driveApi);
app.use("/api/org", orgApi);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: isDev }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    })
});