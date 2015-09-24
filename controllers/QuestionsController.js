questionList.controller('QuestionsCtrl', function QuestionsCtrl($scope, $stateParams, UsersFactory, UtilitiesFactory) {
  $scope.user = UtilitiesFactory.findById(UsersFactory.users, $stateParams.userId);
  $scope.addQuestion = function() {
    $scope.user.questions.push({ name: $scope.questionName, answers: [], approval: $scope.approval, vote: 0, comments: [] });
    $scope.questionName = null;
    $scope.answer = null;
    $scope.approval = false;
    console.log($scope.user.questions);
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

  $scope.addAnswer = function (question, answer) {
    //question.answer = "Click to answer";
    question.answers.push({ theAnswer: answer, vote: 0, approval: null });
  }

  $scope.upVoteAnswer = function(answer){
    answer.vote++;
  }

});
