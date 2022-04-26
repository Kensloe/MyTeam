const express = require('express');
const router = express.Router();
const allteamsCtrl = require('../controllers/allteams');
const isLoggedIn = require('../config/auth');

router.get('/', allteamsCtrl.index);


module.exports = router;