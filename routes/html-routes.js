var path = require("path");

module.exports = function(app) {
    //path for main page
    router.get("/", function(req, res){
        res.render("index")
    });

    //path for user page
    router.get("/user", function(req, res){
        res.render("user")
    });

    //path for registration
    router.get("/register", function(req, res){
        res.render("register")
    });   


};