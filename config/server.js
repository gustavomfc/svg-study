var express=require('express');
var app=express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', './lib/views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({
    strict: false
  }))

//HTTP on port 3000
app.listen(3000);

module.exports = app;