'use strict';

/**
 * @ngdoc overview
 * @name quizApp
 * @description
 * # quizApp
 *
 * Main module of the application.
 */
angular
  .module('quizApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.utils',
    'angularLocalStorage'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',//,
        //controller: 'MainCtrl as main'
        controller: 'QuizCtrl as quizCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
      $locationProvider.hashPrefix("!");
  });
