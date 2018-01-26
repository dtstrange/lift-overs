var db = require("../models");
var express = require("express");
var router = express.Router();

//path for main page with registration
router.get("/", function (req, res) {
    var hbsObject = {
        name: 1
    };
    res.render("index", hbsObject);
});

//path for login page
router.get("/login", function (req, res) {
    var hbsObject = {
        name: 1
    };
    res.render("login", hbsObject);
});

module.exports = router;
