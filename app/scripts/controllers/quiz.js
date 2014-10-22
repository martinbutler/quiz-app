'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:QuizCtrl
 * @description
 * # QuizCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('QuizCtrl', function (qPoints, $scope, $interval, scoreKeeper, scoreKeeperFactory) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.score = scoreKeeperFactory.getScore();
   
  // $scope.score = 0;
   var that = this;

  this.checkAnswer = function(response, question, answer, index) {
  	 if (response === answer) {
          // $scope.score++;
          question.answered = true;
          scoreKeeperFactory.addScore();
          $scope.score = scoreKeeperFactory.getScore();

  	 }
  };

    });
