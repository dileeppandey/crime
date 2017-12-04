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

var fedExData = {
    "state": "Arizona",
    "federalExpenses": {
        "AmericanIndianEducation": "10,235 ",
        "AssistanceInFederallyAffectedAreas": "149,281 ",
        "BlockGrantForSchoolImprovement": "75,805 ",
        "EnglishLanguageAcquisition": "14,128 ",
        "GrantsForDisadvantaged": "342,030 ",
        "RehabilitationServices": "65,364 ",
        "SpecialEducation": "203,193 ",
        "StudentFinancialAssistance": "1,312,501 "
    }
};
var crimeData = {
    "crimeData": {
        "population": "164,008",
        "Aggravated_Assault": "500",
        "Arson": "28",
        "Burglary": "1,579",
        "Larceny_Theft": "6,804",
        "Motor_vehicle_theft": "550",
        "Murder": "5",
        "Rape": "45",
        "Robbery": "237"
    }
};
var demoData = {
    "educationData": {
        "HighSchoolDiplomaOnlyPercentage": "24.4",
        "BachelorDegreeOrHigherPercentage": "27.5",
        "LessThanHighSchoolPercentage": "14"
    }
};

// app.get('/crimedata/tempe/arizona', function(req, res) {
//     res.send(crimeData);
// });

// app.get('/educationdata/arizona', function (req, res) {
//     res.send(demoData);
// });

// app.get('/federalexpenses/arizona', function (req, res) {
//     res.send(fedExData);
// });


app.use('/', crime);

app.listen(3000);
