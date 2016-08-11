var app = angular.module('reddit-clone', []);
app.controller('RedditController', function($scope){
  $scope.view = {};
  $scope.view.test = 'working';
});
