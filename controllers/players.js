const Player = require('../models/player');
const Team = require('../models/teams');

module.exports = {
    new: newPlayer,
    create,
};

function create(req, res) {
    const s = req.body.born;
  req.body.born = `${s.substr(5, 2)}-${s.substr(8, 2)}-${s.substr(0, 4)}`;
  Performer.create(req.body, function (err, player) {
    res.redirect('/players/new');
  });
}


function newPlayer(req, res) {
    Player.find({}).sort('name').exec(function (err, players) {
      res.render('players/new', {
        title: 'Add Player',
        players
      });
    });
  }
