var express = require('express');
var http = require('http');
var router = express.Router();

var SparqlClient = require('sparql-client');
var util = require('util');
var endpoint = 'http://dbpedia.org/sparql';

router.get('/fetch/:city', function(req, res, next){
    // var body = req.body;
    var city = req.params.city;
    console.log('got city name'+req.params.city);

    // Get the leaderName(s) of the given citys
    // if you do not bind any city, it returns 10 random leaderNames
    var query = "SELECT * WHERE {?city <http://dbpedia.org/property/leaderName> ?leaderName} LIMIT 10";
    var client = new SparqlClient(endpoint);
    console.log("Query to " + endpoint);
    console.log("Query: " + query);
    client.query(query)
    //   .bind('city', 'db:Chicago')
      //.bind('city', 'db:Tokyo')
    //   .bind('city', 'db:Casablanca')
    //   .bind('city', '<http://dbpedia.org/resource/Vienna>')
      .execute(function(error, results) {
    //   process.stdout.write(util.inspect(arguments, null, 20, true)+"\n");1
      res.json(results);
    });
});

router.get('/', function(req, res, next){
	// var body = req.body;
    res.json('hahahah');
});


module.exports = router;