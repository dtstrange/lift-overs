//require express
var express = require("express");

var router = express.Router();

var db = require("../models");

//path for main page
router.get("/", function(req, res){
    res.render("index")
});

//login or register request
// router.post("/api/lift-overs",(req, res){
//     if()
// });


module.exports = router;



