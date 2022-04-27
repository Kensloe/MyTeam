const express = require('express');
const router = express.Router();
const teamsCtrl = require('../controllers/teams');
const isLoggedIn = require('../config/auth');

router.get('/', teamsCtrl.index);
router.get('/newTeam', newTeamsCtrl.newTeam);
router.get('/:id', teamsCtrl.show);
router.post('/', isLoggedIn, teamsCtrl.create);


module.exports = router;