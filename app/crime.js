var express = require('express');
var http = require('http');
var router = express.Router();

var SparqlClient = require('sparql-client');
var util = require('util');
var endpoint = 'http://localhost:3030/crime/query';

router.get('/fetch/:city', function(req, res, next){
    // var body = req.body;
    var city = req.params.city;
    console.log('got city name'+req.params.city);

    // Get the leaderName(s) of the given citys
    // if you do not bind any city, it returns 10 random leaderNames
    var query = "SELECT DISTINCT ?statename WHERE { ?state <http://org.semweb/group12#has> ?city. ?state <http://org.semweb/group12#name> ?statename.?city <http://org.semweb/group12#name> '"+city+"'.} LIMIT 225";
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
      res.json(results.results.bindings);
    });
});

router.get('/', function(req, res, next){
	// var body = req.body;
    res.json('Looks like webpage is missing??!!??!! Call The Engineers!!!!!!!!!!');
});

module.exports = router;