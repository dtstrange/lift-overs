var db = require("../models");

module.exports = function(app) {
    //path for main page with registration
    app.get("/", function(req, res){
        var hbsObject = {
            name: 1
        };
        res.render("index", hbsObject);
    });

    app.get("/register", function(req, res){
        var hbsObject = {
            name: 1
        };
        res.render("register", hbsObject);
    });

    //path for login page
    app.get("/login", function(req, res){
        var hbsObject = {
            name: 1
        };
        res.render("login", hbsObject);
    });

    //path for driver landing page
    app.get("/user/driver", function(req, res){
        var hbsObject = {
            name: 1
        };
        res.render("driver", hbsObject);
    });

    //path for supplier landing page
    app.get("/user/supplier", function(req, res){
        var hbsObject = {
            name: 1
        };
        res.render("supplier", hbsObject);
    });

    //path for oganization landing page
    app.get("/user/org", function(req, res){
        var hbsObject = {
            name: 1
        };
        res.render("org", hbsObject);
    });   


};
