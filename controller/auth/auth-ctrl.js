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
        id: user.id,
        first: user.firstName,
        last: user.lastName,
        email: user.email,
        exp: expire.getTime()/1000
    }, process.env.JWT_SECRET);
}
ctrl.login = function(req, res) {
    var email = req.body.email;
    var password = req.body.password;
    models.User.findOne({where: {
        email: email
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
    var user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email.trim().toLowerCase(),
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
