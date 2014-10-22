'use strict';

/**
 * @ngdoc service
 * @name quizApp.qPoints
 * @description
 * # qPoints
 * Provider in the quizApp.
 */
angular.module('quizApp')
  .provider('qPoints', function () {

    // Private variables
    var salutation = 'Hello';
    var points = 1;
    // Private constructor
    function Greeter() {
      this.greet = function () {
        return salutation;
      };
    }

    // Public API for configuration
    this.setPoints = function (s) {
      points = s;
      
    };

    // Method for instantiating
    this.$get = function () {
      return points;
    };
  })
   .config(function(qPointsProvider) {
      qPointsProvider.setPoints(10);
   })
