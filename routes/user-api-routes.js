var db = require("../models");

module.exports = function(app){
    app.get("/api/all", function(req, res){
        db.User.findAll({}).then(function(results){
            res.json(results);
        })
    });

    //route to create user
        app.post("/api/create/user", function(req, res){
            db.User.create(req.body).then(function(dbUser){
                res.json(dbUser)
            })
        });



};

