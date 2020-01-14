//Requisitos para execução
var app = require('./config/server');
console.log("RODOOU Yay!");

//var indexRoute = require('./lib/routes/index');
//indexRoute(app);

var router = require('./lib/routes/router');
router(app);