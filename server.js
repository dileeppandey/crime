var express = require('express');
var app = express();
var port = 3000;
var path = require('path');

app.use(express.static(__dirname + '/views'));
var crime = require('./app/crime');

app.use('/', crime);

app.listen(3000);
