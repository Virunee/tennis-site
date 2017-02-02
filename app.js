var myApp = angular.module('myApp', ['ngMessages', 'ngRoute']);

myApp.config(function ($routeProvider) {

  $routeProvider

    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })

    .when('/aboutus', {
        templateUrl: 'pages/aboutus.html',
        controller: 'mainController'
    })

    .when('/coaching', {
        templateUrl: 'pages/coaching.html',
        controller: 'mainController'
    })
});


myApp.controller('mainController', ['$scope', '$filter', '$location', function($scope, $filter, $location) {

}]);
