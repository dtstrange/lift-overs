//require express
var express = require("express");

var router = express.Router();

var db = require("../models");

//path for main page
router.get("/", function(req, res){
<<<<<<< HEAD
    res.render("index")
});

//login or register request
// router.post("/api/lift-overs",(req, res){
//     if()
// });


module.exports = router;



=======
    res.send("index")
});


module.exports = router;
>>>>>>> cee3df07bb58c69a34116d5acc4338bef4e01af5
