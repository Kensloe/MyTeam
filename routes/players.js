const express = require('express');
const router = express.Router();
const isLoggedIn = require('../config/auth');
const playersCtrl = require('../controllers/players');

// GET /players/new
router.get('/players/new', playersCtrl.new);
// POST /players
router.post('/players', playersCtrl.create);
// POST /movies/:id/players
router.post('/teams/:id/players', playersCtrl.addToTeam);

module.exports = router;