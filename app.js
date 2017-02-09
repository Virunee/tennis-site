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
// SERVICES

myApp.service('priceFinder', function() {

  this.lessonType = "Choose...";

  this.duration = "Choose...";

});


//CONTROLLERS

myApp.controller('mainController', ['$scope', function($scope) {

}]);

myApp.controller('aboutUsController', ['$scope', function($scope) {

}]);

myApp.controller('coachingController', ['$scope','priceFinder', function($scope, priceFinder) {

  $scope.lessonType = priceFinder.lessonType;
  $scope.$watch('lessonType', function () {
      priceFinder.lessonType = $scope.lessonType;
    })

    $scope.duration = priceFinder.duration;
    $scope.$watch('duration', function () {
        priceFinder.duration = $scope.duration;
      })


}]);

myApp.controller('whatsonController', ['$scope', function($scope) {

}]);

myApp.controller('contactController', ['$scope', function($scope) {

  $scope.messages = {
    name:"",
    message:""
  };

  $scope.messagesArray = [];

  $scope.addMessage = function(messages){
        console.log(messages);
       $scope.messagesArray.push(messages);
       console.log($scope.messagesArray);
       $scope.messages = {}; // empties form after submit
    };

}]);

myApp.controller('joinController', ['$scope', function($scope) {

}]);
