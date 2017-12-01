var express = require('express');
var app = express();
var port = 3000;
var path = require('path');

app.use(express.static(__dirname + '/crime-ui/src/'));
var crime = require('./app/crime');

app.use('/', crime);

app.listen(3000);
