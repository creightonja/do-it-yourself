questionList.controller('QuestionsCtrl', function QuestionsCtrl($scope, $stateParams, UsersFactory, UtilitiesFactory) {
  $scope.user = UtilitiesFactory.findById(UsersFactory.users, $stateParams.userId);
  $scope.addQuestion = function() {
    $scope.user.questions.push({ name: $scope.questionName, answer: $scope.answer, vote: 0, comments: [] });
    $scope.questionName = null;
    $scope.answer = null;
  }

  $scope.upVote = function(question) {
    question.vote++;
  }

  $scope.downVote = function(question) {
    question.vote--;
  }

});
