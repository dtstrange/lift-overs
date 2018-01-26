var db = require("../models");
var express = require("express");
var router = express.Router();

    //path for driver landing page
    router.get("/driver", function(req, res){
        console.log("ey world")
        var hbsObject = {
            name: 1
        };
        res.render("driver", hbsObject);
    });

    //path for supplier landing page
    router.get("/org/supplier", function(req, res){
        var hbsObject = {
            name: 1
        };
        res.render("supplier", hbsObject);
    });

    //path for oganization landing page
    router.get("/org", function(req, res){
        var hbsObject = {
            name: 1
        };
        res.render("org", hbsObject);
    });   


module.exports = router;
