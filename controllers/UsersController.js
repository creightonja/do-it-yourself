questionList.controller('UsersCtrl', function UsersCtrl($scope, UsersFactory) {
  $scope.users = UsersFactory.users;
  $scope.UsersFactory = UsersFactory;
});
