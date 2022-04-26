const methodOverride = require('method-override');
const Player = require('../models/player');
const team = require('../models/team');
const Team = require('../models/team');

module.exports = {
    new: newPlayer,
    create,
    addToRoster
};

function addToRoster(req, res) {
    methodOverride.findById(req.params.id, function(err, movie) {
    team.roster.push(req.body.playerId);
    movie.save(function(err) {
        res.redirect(`/players/${movie._id}`);
    });
    });
}

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
