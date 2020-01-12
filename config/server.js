var express=require('express');
var app=express();

app.set('view engine', 'ejs');

//HTTP on port 3000
app.listen(3000);

module.exports = app;