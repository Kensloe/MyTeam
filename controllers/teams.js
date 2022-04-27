const Team = require('../models/team')
module.exports = {
    index,
    show,
    create,
    new: newTeam
};

function index(req, res) {
    Team.find({}, (err, teams)=>{
       res.render('teams/index', {title: 'teams', teams } )
    });
} 

function show(req, res) {
    res.render('teams/show', { title: 'Team Detail', team })
}

function create(req, res) {
    res.render('teams/create', {title: ''})

}

function newTeam(req, res) {
    res.render('teams/new',{title: 'newTeam'} );

}
