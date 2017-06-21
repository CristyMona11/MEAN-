var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello Cristina!';

  $scope.posts = [
    {title:'post 1', upvotes: 3},
    {title:'post 11', upvotes: 12},
    {title:'post 23', upvotes: 2},
    {title:'post 22', upvotes: 2445},
  ];

  $scope.addPost = function(){
    if ($scope.title === ''){ return; }
    $scope.posts.push({
      title: $scope.title,
      link: $scope.link,
      upvotes: 0
    });
    $scope.title = '';
    $scope.link = '';
    $scope.upvotes = '';
  }
  $scope.incrementUpvotes = function(post){
    post.upvotes += 1;
  }
}]);
