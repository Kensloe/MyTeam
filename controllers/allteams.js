module.exports = {
    index
};

function index(req, res) {
    res.render('allteams/index', {title: 'allteams'} )
}