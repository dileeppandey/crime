var caApp = angular.module("crimeAnalyticsApp", ['ui.router', 'search', 'compare']);

caApp.config(function($stateProvider, $urlServiceProvider) {

    console.log('inside config');
    
    $urlServiceProvider.rules.otherwise({state: '/'});

    $stateProvider.state('compare', {
        url: '/compare',
        component: 'compare'
    });

    $stateProvider.state('/', {
        url: '/',
        component: 'search'
    });

});

caApp.controller('controlsCtrl', function ($scope, $state) {
    console.log('inside controls controller');

    var searchBtn = document.getElementById('searchBtn');
    searchBtn.className += ' active';
    var compareBtn = document.getElementById('compareBtn');
    
    $scope.searchBtnAction = function () {
        console.log('searchBtn Clicked');

        if (searchBtn.className.includes('active') !== true){
            searchBtn.className += ' active';
            compareBtn.className = compareBtn.className.replace('active', '').trim();
        }
        $state.go("/");
    };

    $scope.compareBtnAction = function () {
        console.log('compareBtn Clicked');

        if (compareBtn.className.includes('active') !== true) {
            compareBtn.className += ' active';
            searchBtn.className = searchBtn.className.replace('active', '').trim();
        }
        $state.go("compare");
    };
    
})