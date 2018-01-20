var User = require("../models/user.js");

module.exports = function(app){
    app.get("/api/all", function(req, res){
        User.findAll({}).then(function(results){
            res.json(results);
        })
    })
}

