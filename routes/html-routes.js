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

    app.get("/test", function(req, res){
        var hbsObject = {
            name: 1
        };
        res.render("test", hbsObject);
    });

    //path for login page
    app.get("/login", function(req, res){
        var hbsObject = {
            name: 1
        };
        res.render("login", hbsObject);
    });

    //path to complete driver registration
    app.get("/driver-reg", function(req, res){
        var hbsObject = {
            name: 1
        };
        res.render("driver-reg", hbsObject);
    });

    //path to complete organization registration
    app.get("/org-reg", function(req, res){
        var hbsObject = {
            name: 1
        };
        res.render("org-reg", hbsObject);
    });


    //path for driver landing page
    app.get("/driver", function(req, res){
        var hbsObject = {
            name: 1
        };
        res.render("driver", hbsObject);
    });

    //path for supplier landing page
    app.get("/supplier", function(req, res){
        var hbsObject = {
            name: 1
        };
        res.render("supplier", hbsObject);
    });

    //path for oganization landing page
    app.get("/org", function(req, res){
        var hbsObject = {
            name: 1
        };
        res.render("org", hbsObject);
    });   


};
