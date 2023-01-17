var express = require('express');
var router = express.Router();

const {register, login, profile} = require('../controllers/userController');

//users
router.get('/register', register);
router.get('/login', login);
router.get('/profile', profile);

module.exports = router;
