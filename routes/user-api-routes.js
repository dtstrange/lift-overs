var db = require("../models");
var express = require("express");
var router = express.Router();;

router.get("/api/user/all", function (req, res) {
    db.User.findAll({}).then(function (results) {
        res.json(results);
    }).catch(function (err) {
        console.log(err)
    });
});




//route to update user into
router.put("/api/user/update/:id", function (req, res) {
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

    module.exports = router;


