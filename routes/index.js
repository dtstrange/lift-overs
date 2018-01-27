var db = require("../models");
var express = require('express');
var router = express.Router();
var expressValidator = require('express-validator');
var bcrypt = require('bcrypt');
var passport = require('passport');
const saltRounds = 10;


router.get('/', function(req, res, next) {
  console.log(req.user);
  console.log(req.isAuthenticated());
  res.render('index', { title: 'Home' });
});

router.get('/user/driver', function(req, res, next) {
    res.render('driver', { title: 'Driver' });
  });

  router.get('/user/org', function(req, res, next) {
    res.render('org', { title: 'Org' });
  });

  router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Login' });
  });




////////////////// REGISTER ROUTE /////////////////////////////////
router.get('/register', function(req, res, next) {
    res.render('register', { title: 'Registration' });
});
// Registration FORM VALIDATION //
router.post('/register', function(req, res, next) {
    req.checkBody('username', 'Username field cannot be empty.').notEmpty();
    req.checkBody('username', 'Username must be between 4-15 characters long.').len(4, 15);
    req.checkBody('email', 'The email you entered is invalid, please try again.').isEmail();
    req.checkBody('email', 'Email address must be between 4-60 characters long, please try again.').len(4, 60);
    req.checkBody('password', 'Password must be between 8-60 characters long.').len(8, 60);
    req.checkBody("password", "Password must include one lowercase character, one uppercase character, a number, and a special character.").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/, "i");
    req.checkBody('passwordMatch', 'Password must be between 8-60 characters long.').len(8, 60);
    req.checkBody('passwordMatch', 'Passwords do not match, please try again.').equals(req.body.password);

    const errors = req.validationErrors();
    if (errors) {
        console.log(`errors: ${JSON.stringify(errors)}`);
        res.render('register', {
            title: 'Registration Error',
            errors: errors
        });
    } else {
        var password = req.body.password;
        bcrypt.hash(password, saltRounds, function(err, hash) {
            db.User.create({
                    username: req.body.username,
                    email: req.body.email,
                    password: hash
                })
                .then(function(dbUser) {
                  var user_id = dbUser.id;
                  console.log("last id " + user_id)

                  req.login(user_id, function(err){
                    res.redirect('/');
                    // res.render('register', { title: 'Registration Complete' });
                  })
                    // res.render('register', { title: 'Registration Complete' });
                    // res.redirect("/user/driver");
                })
                .catch(function(err) {
                    console.log(err);
                });

        });
    }

});


passport.serializeUser(function(user_id, done) {
  done(null, user_id);
});

passport.deserializeUser(function(user_id, done) {
    done(null, user_id);
});

////////////////// END OF REGISTER ROUTE /////////////////////////////////

module.exports = router;