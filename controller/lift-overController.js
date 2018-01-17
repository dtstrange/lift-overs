//require express
var express = require("express");

var router = express.Router();

var db = require("../models");

//path for main page
router.get("/", function(req, res){
    res.render("index")
});


module.exports = router;



