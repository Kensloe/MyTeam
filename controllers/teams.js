const Team = require('../models/team')
const Player = require('../models/player')
module.exports = {
    index,
    show,
    create,
    new: newTeam,
    deleteTeam,
    editTeam,
    forUser,
    update,

};

function index(req, res) {
    Team.find({}, function(err, teams) {
       res.render('teams/index', {title: 'All Teams', teams } )
    });
} 

function show(req, res) {
    Team.findById(req.params.id, function(err, team) { 
        res.render('teams/show', { title: 'Team Details', team});
    });
}

function create(req, res) {
    const team = new Team(req.body);
    // Assign the logged in user's id
    team.user = req.user._id;
    team.save(function(err) {
        console.log(team);
      if (err) return res.redirect('/teams/new');
      res.redirect(`/teams`);
    });
  }
  
  function deleteTeam(req, res) {
    Team.findOneAndDelete(
      {_id: req.params.id, user: req.user._id}, function(err) {
            res.redirect('/teams');    
      }
    );
  }

  function editTeam(req, res) {
    Team.findOne({ _id: req.params.id, userRecommending: req.user._id}, function(err, team) {
      if (err || !team) return res.redirect('/teams');
      res.render('teams/edit', {team});
    });
  }

  function forUser(req, res) {
    Team.find({user: req.user._id}, (err, teams)=>{
       res.render('teams/index', {title: 'My Teams', teams } )
    });
} 

function update(req, res) {
  Team.findOneAndUpdate(
    {_id: req.params.id, userRecommending: req.user._id},
    // update object with updated properties
    req.body,
    // options object with new: true to make sure updated doc is returned
    {new: true},
    function(err, team) {
      if (err || !team) return res.redirect('/teams');
      res.redirect(`teams/${team._id}`);
    }
  );
}

function newTeam(req, res) {
    res.render('teams/new',{title: 'Add Team'} );

}
