var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider
    .when("/players", {
      templateUrl: "static/partials/players.html"
    })
    .when("/teams", {
      templateUrl: "static/partials/teams.html"
    })
    .when("/associations", {
      templateUrl: "static/partials/associations.html"
    })
    .otherwise({
      redirectTo: "/players"
    });
})

app.factory("playerFactory", [function(){
  var factory = {};

  var players = [];

  factory.index = function(callback){
    callback(players);
  }

  factory.create = function(player){
    players.push(player);
  }

  factory.delete = function($index){
    players.splice($index, 1);
  }

  factory.addPlayerToTeam = function(data){
    console.log(data);
    console.log(data.playerIdx);
    console.log(players[data.playerIdx]);
    console.log(players[0]);
    players[data.playerIdx].team = data.team;
  }

  factory.removePlayerFromTeam = function($index){
    players[$index].team = "";
  }
  return factory;
}]);

app.controller("PlayersController", function($scope, playerFactory){
  function getPlayers(data){
    $scope.players = data;
    $scope.newPlayer = {};
  }

  $scope.players = [];

  playerFactory.index(getPlayers);

  $scope.create = function(){
    playerFactory.create($scope.newPlayer)
    $scope.newPlayer = {};
  }

  $scope.delete = function($index){
    playerFactory.delete($index);
  }
})

app.factory("teamFactory", [function(){
  var factory = {};

  var teams = [];

  factory.index = function(callback){
    callback(teams);
  }

  factory.create = function(team){
    teams.push(team);
  }

  factory.delete = function($index){
    teams.splice($index, 1);
  }
  return factory;
}]);

app.controller("TeamsController", function($scope, teamFactory){
  function getTeams(data){
    $scope.teams = data;
    $scope.newTeam = {};
  }

  $scope.teams = [];

  teamFactory.index(getTeams);

  $scope.create = function(){
    teamFactory.create($scope.newTeam)
    $scope.newTeam = {};
  }

  $scope.delete = function($index){
    teamFactory.delete($index);
  }
})

app.controller("AssociationsController", function($scope, teamFactory, playerFactory){
  $scope.players = [];
  $scope.teams = [];

  teamFactory.index(function(teams){
    $scope.teams = teams;
  })

  playerFactory.index(function(players){
    $scope.players = players;
  })

  $scope.addPlayerToTeam = function(){
    playerFactory.addPlayerToTeam($scope.newAssoc);
  }

  $scope.removePlayerFromTeam = function($index){
    playerFactory.removePlayerFromTeam($index);
  }
})
