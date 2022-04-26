const express = require('express');
const router = express.Router();
const teamsCtrl = require('../controllers/teams');
const isLoggedIn = require('../config/auth');

router.get('/', teamsCtrl.index);


module.exports = router;