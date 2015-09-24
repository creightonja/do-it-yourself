var questionList = angular.module('questionList', ['ui.router']);

questionList.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('users', {
    url: "/users",
    templateUrl: "partials/users.html",
    controller: 'UsersCtrl'
  });

  $stateProvider
    .state('users.questions', {
      url: "/:userId",
      templateUrl: "partials/users.questions.html",
      controller: 'QuestionsCtrl'
    })
    .state('users.questions.comments', {
      url: "/:questionId",
      templateUrl: "partials/users.questions.comments.html",
      controller: 'CommentsCtrl'
    });
});
