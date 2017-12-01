var express = require('express');
var http = require('http');
var router = express.Router();

var SparqlClient = require('sparql-client');
var util = require('util');
var endpoint = 'http://dbpedia.org/sparql';

router.get('/fetch/:city', function(req, res, next){
	// var body = req.body;
    console.log('got city name'+req.params.city);
    res.json('hahahah');

});

router.get('/', function(req, res, next){
	// var body = req.body;
    res.json('hahahah');
});


module.exports = router;