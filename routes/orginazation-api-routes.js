var db = require("../models");
var express = require("express");
var router = express.Router();

    //route to find receive orginzations
    router.get("/api/org/recieve", function(req, res){
        db.organization_id.findAll({
            where:{
                type:req.body.recieve
            }
        }).then(function(dbOrgRecieve){
            res.json(dbOrgRecieve)
        }).catch(function (err) {
            console.log(err)
        });
    });
    //route to find supplier orginzations
    router.get("/api/org/supply", function(req, res){
        db.organization_id.findAll({
            where:{
                type:req.body.supply
            }
        }).then(function(dbOrgSupply){
            res.json(dbOrgSupply)
        }).catch(function (err) {
            console.log(err)
        });
    });
    //route to get orginzation info
    router.get("/api/org/:organization_id", function(req, res){
        db.organization.findAll({
            where:{
                organization_id:req.body.organization_id
            }
        }).then(function(dbOrgInfo){
            res.json(dbOrgInfo)
        }).catch(function (err) {
            console.log(err)
        });
    });
    
    //route to create orginzation info
    router.post("/api/org", function(req, res){
        db.organization.create({
            organization_name: req.body.organization_name,
            organization_street_address: req.body.organization_street_address,
            organization_city: req.body.organization_city,
            organization_state: req.body.organization_state,
            organization_zip: req.body.organization_zip,
            organization_contact: req.body.organization_contact,
            organization_website: req.body.organization_website,
            organization_phone: req.body.organization_phone,
            organization_description: req.body.organization_description,
            organization_type: req.body.organization_type
        }).then(function(dbOrgCreate){
            res.json(dbOrgCreate)
        }).catch(function (err) {
            console.log(err)
        });
    })

    //route to update orginzation info
    router.put("/api/org/:orginzation_id", function(req, res){
        db.organization.update({organization_name: req.body.organization_name,
            organization_street_address: req.body.organization_street_address,
            organization_city: req.body.organization_city,
            organization_state: req.body.organization_state,
            organization_zip: req.body.organization_zip,
            organization_contact: req.body.organization_contact,
            organization_website: req.body.organization_website,
            organization_phone: req.body.organization_phone,
            organization_description: req.body.organization_description,
            organization_type: req.body.organization_type},
            {
                where:{
                    organization_id:req.body.organization_id
                }
            }
        ).then(function(dbOrgUpdate){
            res.json(dbOrgUpdate)
        }).catch(function (err) {
            console.log(err)
        });
    });

    module.exports = router;

