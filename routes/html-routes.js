var db = require("../models");

var dummyContent = [
    {
        Test: "dummy content text"
    }
  ];

module.exports = function(app) {
    

    //path for user page
    app.get("/user", function(req, res){
        res.render("user", dummyContent[0])
    });

};
