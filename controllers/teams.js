const team = require('../models/team');
const Team = require('../models/team')
module.exports = {
    index,
    show,
    create,
    new: newTeam,
    deleteTeam,
    editTeam,
};

function index(req, res) {
    Team.find({}, (err, teams)=>{
       res.render('teams/index', {title: 'teams', teams } )
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
            res.redirect('/teams/edit');    
      }
    );
  }

  function editTeam(req, res) {
    Team.findOne({_id: req.params.id, user: req.user._id}, function(err, team) {
      if (err || !team) return res.redirect('/teams');
      res.render('teams/edit', {team});
    });
  }
  


function newTeam(req, res) {
    res.render('teams/new',{title: 'newTeam'} );

}
