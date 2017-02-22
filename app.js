var myApp = angular.module('myApp', ['ngMessages', 'ngRoute', 'ngAnimate', 'ngSanitize']);

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
});

// SERVICES

myApp.service('priceFinder', function() {
  this.lessonType = "Choose...";
  this.duration = "Choose...";
});

//DIRECTIVES

myApp.directive('newsCard', function () {
  return {

    templateUrl: 'directives/newsCard.html',
    replace: true,
  };

});

myApp.directive('socialEventsCard', function () {
  return {

    templateUrl: 'directives/socialEventsCard.html',
    replace: true,
  };

});

myApp.directive('mensFixtures', function () {
  return {

    templateUrl: 'directives/mensFixtures.html',
    replace: true,
  };

});

myApp.directive('womensFixtures', function () {
  return {

    templateUrl: 'directives/womensFixtures.html',
    replace: true,
  };

});


//CONTROLLERS

myApp.controller('mainController', ['$scope', function($scope) {
   $scope.email = '';

   $scope.mailingList = [];

   $scope.addEmail = function(email){
         console.log(email);
        $scope.mailingList.push(email);
        console.log($scope.mailingList);
        $scope.email = ''; // empties form after submit
     };
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
    message:"",
    email:""
  };

  $scope.messagesArray = [];

  $scope.addMessage = function(messages){
        console.log(messages);
       $scope.messagesArray.push(messages);
       console.log($scope.messagesArray);
       $scope.messages = {}; // empties form after submit
    };


}]);
