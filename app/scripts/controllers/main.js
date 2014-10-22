'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
//use .factory to add data to scope that will also
//be available to other modules

//ng-model="anObject" takes data from an input field, stores it as
//anObject
   .controller('MiniQuiz', function ($scope) {

   })


  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
