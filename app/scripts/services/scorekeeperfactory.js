'use strict';

/**
 * @ngdoc service
 * @name quizApp.scoreKeeperFactory
 * @description
 * # scoreKeeperFactory
 * Factory in the quizApp.
 */
angular.module('quizApp')
  .factory('scoreKeeperFactory', function (qPoints) {
    // Service logic
    // ...

    var score = 50;
    var points = 1

    // Public API here
    return {
      getScore: function () {
        return score;
      },
      setScore: function (input) {
        score = input;
      },
      addScore: function (input) {
        score += qPoints;
      },
      changePoints: function (input) {
        points = input;
      }
    };
  });
