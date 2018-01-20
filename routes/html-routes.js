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
    router.get("/register/driver", function(req, res){
        res.render("driver")
    });

    //path for oganization info
    router.get("/register/org", function(req, res){
        res.render("org")
    });
    //path for user settings
    router.get("/user/settings", function(req, res){
        res.render("settings")
    });        


};