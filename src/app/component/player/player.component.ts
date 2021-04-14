  (function () {
    'use strict';
    
    angular
        .module("player")
        .component("player", {
            template: require('./player.template.html'),
            style: require('./player.scss'),
            controller: ['Player', 'Games', '$stateParams', '$scope',
                function PlayerController(Player, Games, $stateParams, $scope) {
                    var self = this;
                    self.$onInit = init;

                    function init() {
                        Player
                            .get({id: $stateParams.id})
                            .$promise
                            .then(function(res) {
                                $scope.player = res;
                                //Общение с компонентом delete-player
                                //Общение с компонентом add-game
                                $scope.$broadcast('loadPlayer', $scope.player);

                                if ($scope.player.games_id.length != 0 ) {
                                    return Games
                                            .get({id: $scope.player.games_id})
                                            .$promise;
                                }
                            })
                            .then(function (res) {
                                if (res) {
                                    $scope.player_games = res;
                                } else {
                                    $scope.player_games = [];
                                }
                                $scope.$broadcast('loadGames', $scope.player_games);
                            });

                    }

                    $scope.$on("updatePlayer", function(e, player) {
                        $scope.player = player;
                        $scope.$broadcast("changePlayerData", player);
                    });
                    $scope.$on("updateGamesPlayer", function(e, added_game) {
                        $scope.player_games = [...$scope.player_games, ...added_game];
                    });
                    $scope.$on("rewriteGamesPlayer", function(e, player_games) {
                        $scope.player_games = player_games;
                    });
                }
            ]
        });
})();