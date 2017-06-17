var express = require('express');
var router = express.Router();

const AuthenticationController = require('../controllers/authentification'),
      passportService = require('../config/passport'),
      passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Registration route
router.post('/register', AuthenticationController.register);

// Login route
router.post('/login', requireLogin, AuthenticationController.login);


module.exports = router;
