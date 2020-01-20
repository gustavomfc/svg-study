module.exports = function(app){

    //Definindo rotas
    let index = require('./index');
    let status = require('./status');

    //Chamando rotas
    index(app);
    status(app);

}