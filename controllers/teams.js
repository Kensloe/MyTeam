const player = require('../models/player');
const Team = require('../models/team');



module.exports = {
    index,
    show,
    new: newTeam,
    create,
};

function index(req, res) {
    Movies.find({}, function(err, team) {
        res.render('teams/index', {title: 'Teams'});
    });
}

function show(req, res) {
    Team.findById(req.params.id)
    .populate('roster')
    .exec(function(err, team) {
        player.find(
            {_id: {$nin: team.player}},
            function(err, players) {
                console.log(players);
                res.render('teams/show', { title: 'Team Detail', team, players });
            }
        );
    });
}

function newTeam(req, res) {
    res.render('teams/new', {title: 'ADD FAV TEAM' });
}

function create(req, res) {
    req.body.nowShowing = !!req.body.nowShowing;
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    var team = new Team(re.body);
    team.save(function(err)
     {
         // handle errors
         if (err) return res.redirect('/teams/new');
         console.log(movie);
         res.redirect(`/teams/${movie._id}`);
     });
    }
