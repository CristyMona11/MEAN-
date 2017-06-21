var app = angular.module('friendsApp', ["ngRoute"]);
/* saving the friendsApp AS app (if error says failed to instantiate app)*/
app.config(function($routeProvider){
  $routeProvider/* */
  .when("/home", {
    templateUrl: "partials/home.html",
    controller: "friendsController"/* this says what partial this controller will control*/
  })
  .when("/new", {
    templateUrl: "partials/new.html",
    controller: "addFriendController"
  })
  .when("/show/:id", {
    templateUrl: "partials/show.html",
    controller: "showFriendController"
  })
  .when("/update/:id", {
    templateUrl: "partials/update.html",
    controller: "updateFriendController"
  })
  .otherwise({
    redirectTo:"/home"
  })
})


app.factory("friendFactory",[function($http){
  var factory = {};
  var friends = [
    { first_name: "Cristy", last_name: "Mona", dob: new Date() },
  ];

  factory.getFriends = function(callback){
    $http.get("/api/getfriends").then(function (response){ /* GET request to server(the routes(api/friends) and then from there, the database), AJAX request-does not have to reload a page after getting data */ /* if friends is not defined as 'var friends =', it means it was already defined, elsewhere(line 29).*/
      callback(response.data.friends);/* this callback was defined in the controller, line 70 */
    });
  }

  factory.addFriend = function(friend, callback){
     console.log("New friend made:", friend);
     $http.post("/api/newfriend", friend).then(function(response){
         console.log("addFriend response:", response);
         callback();
       })
     }

  factory.deleteFriend = function(friendId, finishedRemovingFriend){
    $http.delete('/api/friends/' + friendId)
      finishedRemovingFriend(friends);
    }
  factory.updateFriend = function(updatedFriend, finishUpdatingFriend){
    $http.put("/api/friends/update" + updatedFriend._id, {first_name: updatedFriend.first_name, last_name: updatedFriend.last_name, dob: updatedFriend.dob})
    .then(function(response){
      console.log("response.data", response.data);
      if (typeof(callback) == 'function'){
      friend = response.data;
      finishUpdatingFriend(response.data);
      }
    });
  }

  factory.showFriend = function(friendId, showFriend){
    $http.get('/api/friends/' + friendId).then(function(response){
      showFriend(response.data.friend);
    });
  }
return factory;
}]);

app.controller('friendsController', function($scope, $routeParams, friendFactory){ /*$scope is used to pass information to allow it to be read in the html; injecting these parameters. */
  friendFactory.getFriends(function(friends){/* calling the method getFriends from the friendFactory, and giving it a callback function, from the getFriends FACTORY section^^^*/
    $scope.friends=friends;
  });
  $scope.deleteFriend=function(friendId){
    friendFactory.deleteFriend(friendIdid, function(friends){
      $scope.friends = friends;
    });
  }
});

app.controller('addFriendController', function($scope, friendFactory, $location){
  $scope.addFriend = function(){
    friendFactory.addFriend($scope.newFriend, function(){
      console.log("friend added!", $scope.newFriend)
      $scope.newFriend = {};
    });
    $location.url("/home");
  }
});

app.controller('showFriendController', function($scope, $routePrams, friendFactory){
  var friendId = $routeParams.itemID;
  friendFactory.getFriend(friendId, function(friend){
    $scope.friend = friend;
  });
});

app.controller('updateFriendController', function($scope, $routeParams, $location, friendFactory){
  var friendID = $routeParams.itemID;
  friendFactory.getFriend(friendId, function(friend){
    $scope.friend = friend; /* we are grabbing the database, to prepopulate the form*/
  });
  $scope.updateFriend = function(){
    var friendData = $scope.updatedFriend;
    friendData._id = $routeParams.itemId;
    friendFactory.updateFriend(friendData, function(){ /* calling the factory we are going to update, and update the data*/
      $scope.updatedFriend = {};
      $location.url('/index');
    })
  }
});
