questionList.controller('QuestionsCtrl', function QuestionsCtrl($scope, $stateParams, UsersFactory, UtilitiesFactory) {
  $scope.user = UtilitiesFactory.findById(UsersFactory.users, $stateParams.userId);
  $scope.addQuestion = function() {
    $scope.user.questions.push({ name: $scope.questionName, answer: $scope.answer, approval: $scope.approval, vote: 0, comments: [] });
    $scope.questionName = null;
    $scope.answer = null;
    $scope.approval = false;
  }

  $scope.upVote = function(question) {
    question.vote++;
  }

  $scope.downVote = function(question) {
    question.vote--;
  }

  $scope.approve = function (question) {
    question.approval = true;
  }

  $scope.disapprove = function (question) {
    question.approval = false;
  }

});
