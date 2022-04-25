const express = require('express');
const router = express.Router();
const playersCtrl = require('../controllers/players');

// GET /players/new
router.get('/players/new', playersCtrl.new);
// POST /players
router.post('/players', players.create);
// POST /movies/:id/players
router.post('/players/:id/players', playersCtrl. addToRoster);

mododule.exports = router;