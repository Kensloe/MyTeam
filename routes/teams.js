const express = require('express');
const router = express.Router();
const teamsCtrl = require('../controllers/teams');
const isLoggedIn = require('../config/auth');



router.get('/', teamsCtrl.index);
router.get('/new', teamsCtrl.new);
router.get('/user', teamsCtrl.forUser);
router.get('/:id', teamsCtrl.show);
router.post('/', isLoggedIn, teamsCtrl.create);
router.delete('/:id', teamsCtrl.deleteTeam);
router.get('./:id',teamsCtrl.editTeam)

module.exports = router;