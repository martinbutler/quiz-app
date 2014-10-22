'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:QuestionCtrl
 * @description
 * # QuestionCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('QuestionCtrl', function ($scope, $interval, $http, scoreKeeper, scoreKeeperFactory, quizService) {
    var ctrl = this;
    // $scope.score = scoreKeeperFactory.getScore();
    // console.log(scoreKeeperFactory.getScore());

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    console.log(quizService);
   
    ctrl.quiz = quizService[0];
    console.log(ctrl.quiz);

  $http.get("http://localhost:3000").success(function(data) {
         ctrl.quiz = data;
         console.log(ctrl.quiz);
         quizService.addQuestion(data[0]);
    });

  //    this.quiz = [
  //   { 
  //     "q": "Who is the best ping pong player at FSA?", 
  //     'options': [{ 'value': "Mike"} , { 'value': "Eddie"} , {'value' : "Nimit"} , { 'value': "Patrick"}],
  //     'answer': "Nimit",
  //     'difficulty' : 1 
  //   },
  //   { "q": "Which robot name was chanted during Lego Mindstorms?", 
  //     'options':[{ 'value': 'infiniteLoop'} , { 'value': 'noHope.js'} , {'value' : 'johnny5'} , { 'value': 'none of the above'}], 
  //     'answer':'noHope.js',
  //      'difficulty' : 4 
  //   },
  //   { 
  //     'q': "Out of the following frontend frameworks, which framework is most rails-like", 
  //     'options':[{ 'value': 'Ember.js'} ,{ 'value': 'Angular.js'} , {'value' : 'Backbone.js'} , { 'value': 'Meteor.js'}], 
  //     'answer':'Ember.js',
  //     'difficulty' : 3 
  //   },
  //   { 
  //     'q': "Which project used a local data store?", 
  //     'options':[{ 'value': 'TripPlanner'} ,{ 'value': 'Twitter.js'} , {'value' : 'WikiWalker'} , { 'value': 'WikiStack'}], 
  //     'answer':'Twitter.js',
  //     'difficulty' : 2 
  //   }
  // ];
 this.newOptions = [];

 this.addOption = function() {
   ctrl.newOptions.push({"value": ""});
 };

 this.addQuestion = function() {
     if (!questionForm.correctAnswer.value) {
        console.log("no correct answer")
        $scope.validOrNot = "Click on correct answer";  
     }
     else {
      console.log(ctrl.newOptions);
  	  this.quiz.push({'q' : this.newQuestion, 
        'options' : ctrl.newOptions,
        'answer' : questionForm.correctAnswer.value
      });

  $http.post("http://localhost:3000", this.quiz, function(data) {

    });
   }
  }


  this.timeRemaining = 10;
  var that = this;
  $interval(function() {
  	  that.timeRemaining--;
  }, 1000);

  });

angular.module('quizApp')
   .directive("answer", function() {
     return {
        restrict: 'E',
        templateUrl: 'views/answers.html'
     }
   });


















