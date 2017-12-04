var express = require('express');
var http = require('http');
var router = express.Router();

var SparqlClient = require('sparql-client');
var util = require('util');
var endpoint = 'http://localhost:3030/crime/query';

/*router.get('/fetch/:city', function(req, res, next){
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
});*/

router.get('/', function(req, res, next){
	// var body = req.body;
    res.json('Looks like webpage is missing??!!??!! Call The Engineers!!!!!!!!!!');
});

router.get('/fetch/:city/:state', function(req, res, next){
    // var body = req.body;
    var city = req.params.city;
    var state = req.params.state;
    console.log('got city name'+req.params.city);
    console.log('got state name'+req.params.state);

    // Get the leaderName(s) of the given citys
    // if you do not bind any city, it returns 10 random leaderNames
    var query = "SELECT DISTINCT ?statename WHERE "+
    "{ ?state <http://org.semweb/group12#has> ?city. ?state <http://org.semweb/group12#name> "+
    "?statename.?city <http://org.semweb/group12#name> '"+city+"'.} LIMIT 225";
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


router.get('/federalExpenses', function(req, res, next){

    var outputJson = [];
    
    // Get the leaderName(s) of the given citys
    // if you do not bind any city, it returns 10 random leaderNames
    var query = "SELECT distinct ?statename   ?AmericanIndianEducation ?AssistanceInFederallyAffectedAreas ?BlockGrantForSchoolImprovement " +
    "?EnglishLanguageAcquisition ?GrantsForDisadvantaged ?RehabilitationServices ?SpecialEducation ?StudentFinancialAssistance ?TechnicalAdultEducation" +
    "WHERE {" +
     "?state <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12/crime#State> ." +
      "?state <http://org.semweb/group12#name> ?statename ." +
      "?state <http://org.semweb/group12#has> ?has ." +
      "?state <http://org.semweb/group12#has> ?has1 ." +
       "?state <http://org.semweb/group12#has> ?has2 ." +
       "?state <http://org.semweb/group12#has> ?has3 ." +
       "?state <http://org.semweb/group12#has> ?has4 ." +
       "?state <http://org.semweb/group12#has> ?has5 ." +
       "?state <http://org.semweb/group12#has> ?has6 ." +
       "?state <http://org.semweb/group12#has> ?has7 ." +
       "?state <http://org.semweb/group12#has> ?has8 ." +
      "?has <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12#AmericanIndianEducation> ." +
      "?has <http://org.semweb/group12#count> ?AmericanIndianEducation ." +
      "?has1 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12#AssistanceInFederallyAffectedAreas> ." +
      "?has1 <http://org.semweb/group12#count> ?AssistanceInFederallyAffectedAreas ." +
      "?has2 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12#BlockGrantForSchoolImprovement> ." +
      "?has2 <http://org.semweb/group12#count> ?BlockGrantForSchoolImprovement ." +
      "?has3 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12#EnglishLanguageAcquisition> ." +
      "?has3 <http://org.semweb/group12#count> ?EnglishLanguageAcquisition ." +
      "?has4 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12#GrantsForDisadvantaged> ." +
      "?has4 <http://org.semweb/group12#count> ?GrantsForDisadvantaged ." +
      "?has5 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12#RehabilitationServices> ." +
      "?has5 <http://org.semweb/group12#count> ?RehabilitationServices ." +
      "?has6 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12#SpecialEducation> ." +
      "?has6 <http://org.semweb/group12#count> ?SpecialEducation ." +
      "?has7 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12#StudentFinancialAssistance> ." +
      "?has7 <http://org.semweb/group12#count> ?StudentFinancialAssistance ." +
      "?has8 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12#TechnicalAdultEducation> ." +
      "?has8 <http://org.semweb/group12#count> ?TechnicalAdultEducation ." +
    "}" ;

    var client = new SparqlClient(endpoint);
    console.log("Query to " + endpoint);
    console.log("Query: " + query);
    client.query(query)
    .execute(function(error, results) {

    

    for(var element of results.results.bindings) {
        var json = {
            "state" : element.statename.value,
            "federalExpenses": {
                "AmericanIndianEducation" : element.AmericanIndianEducation.value,
                "AssistanceInFederallyAffectedAreas" : element.AssistanceInFederallyAffectedAreas.value,
                "BlockGrantForSchoolImprovement" : element.BlockGrantForSchoolImprovement.value,
                "EnglishLanguageAcquisition" : element.EnglishLanguageAcquisition.value,
                "GrantsForDisadvantaged" : element.GrantsForDisadvantaged.value,
                "RehabilitationServices" : element.RehabilitationServices.value,
                "SpecialEducation" : element.SpecialEducation.value,
                "StudentFinancialAssistance" : element.StudentFinancialAssistance.value
            }
        };
        outputJson.push(json);
    }

    res.json(outputJson);

});
});

router.get('/federalExpenses/:statename', function(req, res, next){

    var outputJson = [];
    var stateName = req.params.statename;
    
    // Get the leaderName(s) of the given citys
    // if you do not bind any city, it returns 10 random leaderNames
    var query = "SELECT distinct ?statename   ?AmericanIndianEducation ?AssistanceInFederallyAffectedAreas ?BlockGrantForSchoolImprovement " +
    "?EnglishLanguageAcquisition ?GrantsForDisadvantaged ?RehabilitationServices ?SpecialEducation ?StudentFinancialAssistance ?TechnicalAdultEducation" +
    "WHERE {" +
     "?state <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12/crime#State> ." +
      "?state <http://org.semweb/group12#name> ?statename ." +
      "?state <http://org.semweb/group12#has> ?has ." +
      "?state <http://org.semweb/group12#has> ?has1 ." +
       "?state <http://org.semweb/group12#has> ?has2 ." +
       "?state <http://org.semweb/group12#has> ?has3 ." +
       "?state <http://org.semweb/group12#has> ?has4 ." +
       "?state <http://org.semweb/group12#has> ?has5 ." +
       "?state <http://org.semweb/group12#has> ?has6 ." +
       "?state <http://org.semweb/group12#has> ?has7 ." +
       "?state <http://org.semweb/group12#has> ?has8 ." +
      "?has <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12#AmericanIndianEducation> ." +
      "?has <http://org.semweb/group12#count> ?AmericanIndianEducation ." +
      "?has1 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12#AssistanceInFederallyAffectedAreas> ." +
      "?has1 <http://org.semweb/group12#count> ?AssistanceInFederallyAffectedAreas ." +
      "?has2 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12#BlockGrantForSchoolImprovement> ." +
      "?has2 <http://org.semweb/group12#count> ?BlockGrantForSchoolImprovement ." +
      "?has3 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12#EnglishLanguageAcquisition> ." +
      "?has3 <http://org.semweb/group12#count> ?EnglishLanguageAcquisition ." +
      "?has4 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12#GrantsForDisadvantaged> ." +
      "?has4 <http://org.semweb/group12#count> ?GrantsForDisadvantaged ." +
      "?has5 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12#RehabilitationServices> ." +
      "?has5 <http://org.semweb/group12#count> ?RehabilitationServices ." +
      "?has6 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12#SpecialEducation> ." +
      "?has6 <http://org.semweb/group12#count> ?SpecialEducation ." +
      "?has7 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12#StudentFinancialAssistance> ." +
      "?has7 <http://org.semweb/group12#count> ?StudentFinancialAssistance ." +
      "?has8 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12#TechnicalAdultEducation> ." +
      "?has8 <http://org.semweb/group12#count> ?TechnicalAdultEducation ." +
      "FILTER (lcase(?statename) = '"+stateName.toLowerCase()+"')"+
    "}";

    var client = new SparqlClient(endpoint);
    console.log("Query to " + endpoint);
    console.log("Query: " + query);
    client.query(query)
    .execute(function(error, results) {

    var regComma = /,/g;
    for(var element of results.results.bindings) {
        var json = {
            "state" : stateName.charAt(0).toUpperCase() + stateName.slice(1).toLowerCase(),
            "federalExpenses": {
                "AmericanIndianEducation" : parseInt(element.AmericanIndianEducation.value.replace(regComma, "")),
                "AssistanceInFederallyAffectedAreas" : parseInt(element.AssistanceInFederallyAffectedAreas.value.replace(regComma, "")),
                "BlockGrantForSchoolImprovement" : parseInt(element.BlockGrantForSchoolImprovement.value.replace(regComma, "")),
                "EnglishLanguageAcquisition" : parseInt(element.EnglishLanguageAcquisition.value.replace(regComma, "")),
                "GrantsForDisadvantaged" : parseInt(element.GrantsForDisadvantaged.value.replace(regComma, "")),
                "RehabilitationServices" : parseInt(element.RehabilitationServices.value.replace(regComma, "")),
                "SpecialEducation" : parseInt(element.SpecialEducation.value.replace(regComma, "")),
                "StudentFinancialAssistance" : parseInt(element.StudentFinancialAssistance.value.replace(regComma, ""))
            }
        };
        outputJson.push(json);
    }

    res.json(outputJson[0]);

});
});


router.get('/crimeData/:city/:state', function(req, res, next){

    var outputJson = [];
    var stateName = req.params.state;
    var cityName = req.params.city;
    
    // Get the leaderName(s) of the given citys
    // if you do not bind any city, it returns 10 random leaderNames
    var query = "SELECT distinct ?statename ?cityname ?population ?Aggravated_Assault ?Arson ?Burglary ?Larceny_Theft ?Motor_vehicle_theft ?Murder ?Rape ?Robbery"+
               " WHERE {"+
                 "?state <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12/crime#State> ."+
                  "?state <http://org.semweb/group12#has> ?city."+
                  "?state <http://org.semweb/group12#name> ?statename ."+
                  "?city <http://org.semweb/group12#name> ?cityname."+
                  "?city <http://org.semweb/group12#has> ?has ."+
                  "?city <http://org.semweb/group12#has> ?has1 ."+
                  "?city <http://org.semweb/group12#has> ?has2 ."+
                  "?city <http://org.semweb/group12#has> ?has3 ."+
                  "?city <http://org.semweb/group12#has> ?has4 ."+
                  "?city <http://org.semweb/group12#has> ?has5 ."+
                  "?city <http://org.semweb/group12#has> ?has6 ."+
                  "?city <http://org.semweb/group12#has> ?has7 ."+
                  "?city <http://org.semweb/group12#has> ?has8 ."+
                  "?has <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12#Population> ."+
                  "?has <http://org.semweb/group12#count> ?population ."+
                  "?has1 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12#Aggravated_Assault> ."+
                  "?has1 <http://org.semweb/group12#count> ?Aggravated_Assault."+
                  "?has2 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12#Arson> . "+
                  "?has2 <http://org.semweb/group12#count> ?Arson."+
                  "?has3 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12#Burglary> ."+
                  "?has3 <http://org.semweb/group12#count> ?Burglary."+
                  "?has4 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12#Larceny_Theft> ."+
                  "?has4 <http://org.semweb/group12#count> ?Larceny_Theft."+
                  "?has5 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12#Motor_vehicle_theft> ."+
                  "?has5 <http://org.semweb/group12#count> ?Motor_vehicle_theft."+
                  "?has6 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12#Murder> ."+
                  "?has6 <http://org.semweb/group12#count> ?Murder."+
                  "?has7 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12#Rape> ."+
                  "?has7 <http://org.semweb/group12#count> ?Rape."+
                  "?has8 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12#Robbery> ."+
                  "?has8 <http://org.semweb/group12#count> ?Robbery."+
                  "FILTER (lcase(?statename) = '"+stateName.toLowerCase()+"')"+
                  "FILTER (lcase(?cityname) = '"+cityName.toLowerCase()+"')"+
                "}";

    var client = new SparqlClient(endpoint);
    console.log("Query to " + endpoint);
    console.log("Query: " + query);
    client.query(query)
    .execute(function(error, results) {

    
    var regComma = /,/g;

    for(var element of results.results.bindings) {
        var json = {
            "crimeData": {
                "population" : parseInt(element.population.value.replace(regComma, "")),
                "Aggravated_Assault" : parseInt(element.Aggravated_Assault.value.replace(regComma, "")),
                "Arson" : parseInt(element.Arson.value.replace(regComma, "")),
                "Burglary" : parseInt(element.Burglary.value.replace(regComma, "")),
                "Larceny_Theft" : parseInt(element.Larceny_Theft.value.replace(regComma, "")),
                "Motor_vehicle_theft" : parseInt(element.Motor_vehicle_theft.value.replace(regComma, "")),
                "Murder" : parseInt(element.Murder.value.replace(regComma, "")),
                "Rape" : parseInt(element.Rape.value.replace(regComma, "")),
                "Robbery" : parseInt(element.Robbery.value.replace(regComma, ""))
            }
        };
        outputJson.push(json);
    }
    res.json(outputJson[0]);

});
});

router.get('/educationData/:state', function(req, res, next){

    var outputJson = [];
    var stateName = req.params.state;
    
    // Get the leaderName(s) of the given citys
    // if you do not bind any city, it returns 10 random leaderNames
    var query = "SELECT distinct  ?statename ?HighSchoolDiplomaOnlyPercentage ?BachelorDegreeOrHigherPercentage ?LessThanHighSchoolPercentage ?SomeCollegeOrAssociateDegreePercentage"+
                "WHERE {"+
                "  ?state <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12/crime#State> ."+
                "  ?state <http://org.semweb/group12#name> ?statename ."+
                "  ?state <http://org.semweb/group12/crime#hasCounty> ?county ."+
                "  ?county <http://org.semweb/group12#name> ?statename."+
                "  ?county <http://org.semweb/group12#has> ?has."+
                "  ?has <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12#HighSchoolDiplomaOnlyPercentage>."+
                "  ?has <http://org.semweb/group12#countDecimal> ?HighSchoolDiplomaOnlyPercentage."+
                "  ?county <http://org.semweb/group12#has> ?has1."+
                "  ?has1 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12#BachelorDegreeOrHigherPercentage>."+
                "  ?has1 <http://org.semweb/group12#countDecimal> ?BachelorDegreeOrHigherPercentage."+
                "  ?county <http://org.semweb/group12#has> ?has2."+
                "  ?has2 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12#LessThanHighSchoolPercentage>."+
                "  ?has2 <http://org.semweb/group12#countDecimal> ?LessThanHighSchoolPercentage."+
                "  ?county <http://org.semweb/group12#has> ?has3."+
                "  ?has3 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12#SomeCollegeOrAssociateDegreePercentage>."+
                "  ?has3 <http://org.semweb/group12#countDecimal> ?SomeCollegeOrAssociateDegreePercentage."+
                "  ?county <http://org.semweb/group12#has> ?has3."+
                "  ?has3 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://org.semweb/group12#SomeCollegeOrAssociateDegreePercentage>."+
                "  ?has3 <http://org.semweb/group12#countDecimal> ?SomeCollegeOrAssociateDegreePercentage."+
                "  FILTER (lcase(?statename) = '"+stateName.toLowerCase()+"')"+
                "}"

    var client = new SparqlClient(endpoint);
    console.log("Query to " + endpoint);
    console.log("Query: " + query);
    client.query(query)
    .execute(function(error, results) {

    

    for(var element of results.results.bindings) {
        var json = {
            "educationData": {
                "HighSchoolDiplomaOnlyPercentage" : parseFloat(element.HighSchoolDiplomaOnlyPercentage.value),
                "BachelorDegreeOrHigherPercentage" : parseFloat(element.BachelorDegreeOrHigherPercentage.value),
                "LessThanHighSchoolPercentage" : parseFloat(element.LessThanHighSchoolPercentage.value)
            }
        };
        outputJson.push(json);
    }
    res.json(outputJson[0]);

});
});

module.exports = router;