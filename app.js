var myApp = angular.module('myApp', ['ngMessages', 'ngRoute']);

myApp.config(function ($routeProvider) {

  $routeProvider

    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })

    .when('/aboutus', {
        templateUrl: 'pages/aboutus.html',
        controller: 'aboutUsController'
    })

    .when('/coaching', {
        templateUrl: 'pages/coaching.html',
        controller: 'coachingController'
    })

    .when('/whatson', {
        templateUrl: 'pages/whatson.html',
        controller: 'whatsonController'
    })

    .when('/contact', {
        templateUrl: 'pages/contact.html',
        controller: 'contactController'
    })

    .when('/join', {
        templateUrl: 'pages/join.html',
        controller: 'joinController'
    })
});

//CONTROLLERS

myApp.controller('mainController', ['$scope', function($scope) {

}]);

myApp.controller('aboutUsController', ['$scope', function($scope) {

}]);

myApp.controller('coachingController', ['$scope', function($scope) {

}]);

myApp.controller('whatsonController', ['$scope', function($scope) {

}]);

myApp.controller('contactController', ['$scope', function($scope) {

}]);

myApp.controller('joinController', ['$scope', function($scope) {

}]);
