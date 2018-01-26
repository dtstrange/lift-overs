var db = require("../models");

module.exports = function (app) {
    app.get("/api/user/all", function (req, res) {
        db.User.findAll({}).then(function (results) {
            res.json(results);
        }).catch(function (err) {
            console.log(err)
        });
    });

    app.post("/api/user/create/", function(req, res) {
        if (req.body.user_type === "Driver") {
            console.log("Request :");
            console.log(req.body);
            db.User.create(req.body)
                .then(function(dbUser) {
                    console.log(dbUser);
                    res.redirect("/user/driver");
                })
                .catch(function(err) {
                    console.log(err);

                });
        } else {
            console.log("Request :");
            console.log(req.body);
            db.User.create(req.body)
                .then(function(dbUser) {
                    console.log(dbUser);
                    res.redirect("/user/org");
                })
                .catch(function(err) {
                    console.log(err);

                });
        }
    });


    //route to update user into
    app.put("/api/user/update/:id", function (req, res) {
        db.User.update({
            user_first_name: req.body.first_name,
            user_last_name: req.body.last_name,
            user_phone: req.body.phone,
            user_email: req.body.email,
            user_password: req.body.password,
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

