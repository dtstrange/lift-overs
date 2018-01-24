var db = require("../models");

var dummyContent = [
    {
        Test: "dummy content text"
    }
  ];

module.exports = function(app) {
    //path for main page with registration
    app.get("/", function(req, res){
        res.render("index", dummyContent[0]);
    });

    app.get("/register", function(req, res){
        res.render("register", dummyContent[0]);
    });

    //path for login page
    app.get("/login", function(req, res){
        res.render("login", dummyContent[0]);
    });

    //path to complete driver registration
    app.get("/driver-reg", function(req, res){
        res.render("driver-reg", dummyContent[0]);
    });

    //path to complete organization registration
    app.get("/org-reg", function(req, res){
        res.render("org-reg", dummyContent[0]);
    });


    //path for driver landing page
    app.get("/driver", function(req, res){
        res.render("driver", dummyContent[0])
    });

    //path for supplier landing page
    app.get("/supplier", function(req, res){
        res.render("supplier", dummyContent[0])
    });

    //path for oganization landing page
    app.get("/org", function(req, res){
        res.render("org", dummyContent[0])
    });    


};
