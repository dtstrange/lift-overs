var express = require("express");
var router = express.Router();
var authCtrl = require("../controller/auth/auth-ctrl.js");


router.post("/register", authCtrl.register);
router.post("/login", authCtrl.login);
module.exports = router;



