var db = require("../models");

var dummyContent = [
    {
        Test: "dummy content text"
    }
  ];

  module.exports = function(app){
      //path for registration
    app.get("/register/driver", function(req, res){
        res.render("driver", dummyContent[0])
    });

    //path for oganization info
    app.get("/register/org", function(req, res){
        res.render("org", dummyContent[0])
    });
    //path for user settings
    app.get("/user/settings", function(req, res){
        res.render("settings", dummyContent[0])
    });   
  };
