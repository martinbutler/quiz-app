'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('UserCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
