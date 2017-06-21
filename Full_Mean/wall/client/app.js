var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/login.html',
    controller: 'loginController'
  })
  .when('/wall', {
    templateUrl: 'partials/wall.html',
    controller: 'wallController'
  })
  .otherwise({
    redirectTo: '/'
  })
})
app.factory('wallFactory', ['$location', '$http', function($location, $http){
  var factory = {};

  factory.register = function(user){
    $http({
      url: '/register',
      method: 'POST',
      data: user
    }).then(function(res){
      $location.url('/wall');
    }, function(res){
      console.log(res);
    })
  }

  factory.login = function(user){
    $http({
      url: '/login',
      method: 'POST',
      data: user
    }).then(function(res){
      $location.url('/wall');
    }, function(res){
      console.log(res);
    })
  }

  router.get('/logout', function(req, res) {
  req.logout();
  res.status(200).json({
    status: 'Bye!'
  });
  });
  factory.currentUser = function(callback){
    $http({
      url:'/current',
      method: 'GET',
    }).then(function(res){
      callback(res.data.name);
    }, function(res){
      $location.url('/');
    })
  }

  factory.addPost = function(post, callback){
    $http({
      url: '/post',
      method: 'POST',
      data: post
    }).then(function(res){
      callback();
    }, function(res){
      console.log(res);
    })
  }

  factory.getPosts = function(callback){
    $http({
      url: '/posts',
      method: 'GET',
    }).then(function(res){
      callback(res.data);
    }, function(res){
      console.log(res);
    })
  }

  factory.addComment = function(comment, id, callback){
    $http({
      url: '/comment/' + id,
      method: 'POST',
      data: comment
    }).then(function(res){
      callback();
    }, function(res){
      console.log(res);
    })
  }

  return factory;
}])
app.controller('loginController', ['$scope', 'wallFactory', '$location', function($scope, wallFactory, $location){
  $scope.register = function(user){
    wallFactory.register(user);
  }
  $scope.login = function(user){
    wallFactory.login(user);
  }
}])
app.controller('wallController', ['$scope', 'wallFactory', function($scope, wallFactory){
  function currentUser(){
    wallFactory.currentUser(function(data){
      $scope.user = data;
    })
  }
  currentUser();

  $scope.addPost = function(post){
    wallFactory.addPost(post, getPosts);
    $scope.newPost = {};
  }

  function getPosts(){
    wallFactory.getPosts(function(data){
      $scope.posts = data;
    })
  }
  getPosts();

  $scope.addComment = function(comment, id){
    wallFactory.addComment(comment, id, getPosts);
  }
}])
