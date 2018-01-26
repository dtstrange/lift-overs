var db = require("../models");
var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
    var hbsObject = {
        name: 1
    };
    res.render("index", hbsObject);
});

router.get("/register", function(req, res){
    var hbsObject = {
        name: 1
    };
    res.render("register", hbsObject);
});

//path for login page
router.get("/login", function(req, res){
    var hbsObject = {
        name: 1
    };
    res.render("login", hbsObject);
});

router.get("/user/driver/:id?", function(req, res){

    var hbsObject = {
        name: 1
    };

    res.render("driver", hbsObject);
});



//path for supplier landing page
router.get("/user/supplier", function(req, res){
    var hbsObject = {
        name: 1
    };
    res.render("supplier", hbsObject);
});

//path for oganization landing page
router.get("/user/org/:id?", function(req, res){
    var hbsObject = {
        name: 1
    };
    res.render("org", hbsObject);
});   


module.exports = router;
