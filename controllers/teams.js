module.exports = {
    index
};

function index(req, res) {
    res.render('teams/index', {title: 'Teams'} )
}