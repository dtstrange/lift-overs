var db = require("../models");

module.exports = function (app) {
    app.get("/api/user/all", function (req, res) {
        db.User.findAll({}).then(function (results) {
            res.json(results);
        }).catch(function (err) {
            console.log(err)
        });
    });

    app.post("/api/user/create/",function (req, res) {
        db.User.create({
            user_first_name: req.body.first_name,
            user_password: req.body.user_password,
            user_type: req.body.user_type
        }).then(function (dbUser) {
            res.json(dbUser);
        }).catch(function (err) {
            console.log(err);
        
        });
    });


    //route to update user into
    app.put("/api/user/update/:id", function (req, res) {
        db.User.update({
            user_first_name: req.body.first_name,
            user_last_name: req.body.last_name,
            user_phone: req.body.phone,
            user_email: req.body.email,
            user_password: req.body.user_password,
        },
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbUserUpdate) {
                res.json(dbUserUpdate)
            }).catch(function (err) {
                console.log(err)
            });
    })


};

