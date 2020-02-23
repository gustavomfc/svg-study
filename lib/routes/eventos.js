module.exports = function(app){
    app.get('/eventos', function(req, res){
        res.render("eventos");
    });
};
