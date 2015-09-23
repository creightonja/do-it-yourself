questionList.factory('UsersFactory', function UsersFactory() {
  var factory = {};
  factory.users = [];
  factory.addUser = function() {
    factory.users.push({ name: factory.userName, id: factory.users.length + 1, questions: [] });
    factory.userName = null;
  };

  return factory;
});
