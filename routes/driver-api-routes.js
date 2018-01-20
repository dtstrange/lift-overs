var db = require("../models");

module.exports = function (app) {
    //route to get exisiting schedule
    app.get("/api/schedule/:driver_id", function (req, res) {
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
    app.post("/api/schedule/:driver_id", function (req, res) {
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
    app.put("/api/schedule/:driver_id", function (req, res){
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
    
};

