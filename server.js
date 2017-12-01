var express = require('express');
var app = express();
var port = 3000;
var path = require('path');

app.use(express.static(__dirname + '/views'));
var crime = require('./app/crime');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', crime);

app.listen(3000);
