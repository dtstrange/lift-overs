var models = require("../../models");
var crypto = require('crypto');
var jwt = require("jsonwebtoken");
var ctrl = {};

function getHash(password, salt) {
    return crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
}
function getSalt() {
    return crypto.randomBytes(16).toString("hex");
}
function generateJWT(user) {
    var expire = new Date();
    expire.setDate(expire.getDate()+7);
    return jwt.sign({
        user_id: user.id,
        user_first_name: user.firstName,
        user_last_name: user.lastName,
        user_email: user.email,
        exp: expire.getTime()/1000
    }, process.env.JWT_SECRET);
}
ctrl.login = function(req, res) {
    var email = req.body.email;
    var password = req.body.password;
    models.User.findOne({where: {
        user_email: email
    }})
    .then(function(resp) {
        if(resp) {
            //login
            var inputHash = getHash(password, resp.salt);
            console.log(inputHash.toString(), resp.hash);
            if(inputHash === resp.hash) {
                res.json({token: generateJWT(resp)});
            }
            else {
                return res.status(400).end('Wrong Password');
            }
        }
        else {
            //err
            return res.status(404).end('User not found');
        }
    })
    .catch(function(err) {
        console.log(err);
    })
};
ctrl.register = function(req, res) {
    console.log("hello")
    var user = {
        user_first_name: req.body.firstName,
        user_first_name: req.body.lastName,
        user_email: req.body.email.trim().toLowerCase(),
    }
    var salt = getSalt();
    var hash = getHash(req.body.password, salt);
    user.salt = salt;
    user.hash= hash;
    models.User.create(user)
    .then(function(resp) {
        res.json({success: true});
    })
    .catch(function(err) {
        console.error(err);
        throw err;
    });
};

module.exports = ctrl;
