//Requisitos para execução
var app = require('./config/server');
console.log("RODOOU Yay!");

app.get('/', function(req, res){
    res.render("index")
})