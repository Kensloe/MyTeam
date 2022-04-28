const express = require('express');
const router = express.Router();
const isLoggedIn = require('../config/auth');
const playersCtrl = require('../controllers/players');

// GET /players/new
router.get('/new', playersCtrl.new);
// POST /players
router.post('/', playersCtrl.create);
// POST /movies/:id/players
router.post('/teams/:id/players', playersCtrl.addToTeam);

module.exports = router;