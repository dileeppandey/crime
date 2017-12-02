angular.module('search').component('search', {
    templateUrl: '/components/search/search.template.html',
    controller: function () {        
        console.log('inside search controller');
        
        var self = this;
        self.$onInit = function () {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition, function () {
                    showPosition();
                })
            }
        };

        function showPosition(position) {
            console.log('inside showposition');
            console.log(position);
        }

    }
});

angular.module('search').controller('TypeaheadCtrl', function ($scope, $http) {

    var _selected;

    $scope.selected = undefined;
    
    // Any function returning a promise object can be used to load values asynchronously
    $scope.getLocation = function (val) {
        return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
            params: {
                region: "us",
                address: val,
                sensor: false
            }
        }).then(function (response) {
            return response.data.results.map(function (item) {
                getCityData(item);
                return item.formatted_address;
            });
        })
    };

    function getCityData(params) {
        console.log(params);
    }
});