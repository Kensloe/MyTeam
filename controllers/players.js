const Player = require('../models/player');
const Team = require('../models/team');

module.exports = {
    new: newPlayer,
    create,
    addToTeam,
};

function create(req, res) {
  Player.create(req.body, function (err, player) {
    res.redirect('/players/new');
  });
}

function addToTeam(req, res) {
  Team.findById(req.params.id, function(err, team) {
    const newPlayer = new Player(req.body);
    newPlayer.save(()=>{
    team.players.push(newPlayer._id);
    team.save(()=>{
      res.redirect(`/teams/${team._id}`);  
    })
    });
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
