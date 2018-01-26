var db = require("../models");
var express = require("express");
var router = express.Router();

    //route to get exisiting schedule
    router.get("/api/driver/schedule/:driver_id", function (req, res) {
        db.Driver.findAll({
            where:
                { driver_id: req.param.driver_id }
        }).then(function (dbDriverSchedule) {
            res.json(dbDriverSchedule)
        }).catch(function (err) {
            console.log(err)
        });
    });
    //route to create schedule times
    router.post("/api/driver/schedule/:driver_id", function (req, res) {
        db.Driver.create({
            driver_monday: req.body.monday,
            driver_tuesday: req.body.tuesday,
            driver_wednesday: req.body.wednesday,
            driver_thursday: req.body.thursday,
            driver_friday: req.body.friday,
            driver_saturday: req.body.saturday,
            driver_sunday: req.body.sunday
        },
        {
            where:
            { driver_id: req.param.driver_id } 
        }
        ).then(function(dbNewDriverSchedule){
            res.json(dbNewDriverSchedule)
        }).catch(function (err) {
            console.log(err)
        });
    });
    //update sechulde time
    router.put("/api/driver/schedule/:driver_id", function (req, res){
        db.Driver.update({
            driver_monday: req.body.monday,
            driver_tuesday: req.body.tuesday,
            driver_wednesday: req.body.wednesday,
            driver_thursday: req.body.thursday,
            driver_friday: req.body.friday,
            driver_saturday: req.body.saturday,
            driver_sunday: req.body.sunday
        },
        {
            where:
            { driver_id: req.param.driver_id } 
        }
        ).then(function(dbDriverScheduleUpdate){
            res.json(dbDriverScheduleUpdate)
        }).catch(function (err) {
            console.log(err)
        });
    });
    

    module.exports = router;
