var app = angular.module('app', ['ngRoute', 'ngResource', 'ngStorage']);

app.controller('weatherController', ['$scope', '$http', '$localStorage', '$sessionStorage', function($scope, $http, $localStorage, $sessionStorage){
	//Page load actions
	$scope.dataArray =[];

	$scope.isError = false;
	$scope.errorMsg = "";
	
	if($localStorage.cityList == undefined){
		$localStorage.cityList = [];
	}

	$scope.word = /^[\A-Za-z ]*$/;
	
	$scope.add = function() {
		if($scope.cityName == undefined){
			$scope.isError = true;
			$scope.errorMsg = "Invalid location name";
		} else {
			fetchWeatherRecordsForCity($scope.cityName);
		}
		
	}

	fetchWeatherRecordsForCity = function(city){
		$http({method: 'GET', url: '/fetch/'+city}).
		  success(function(data, status, headers, config) {
		    // this callback will be called asynchronously
		    // when the response is available
				$scope.output = data.results;

		    $scope.cityName = '';
		    
		  }).
		  error(function(data, status, headers, config) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		    console.log('error');
		  });
	}
	
}]);
