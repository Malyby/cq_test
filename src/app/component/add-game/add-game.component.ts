  (function () {
    'use strict';
    
    angular
        .module("addGame")
        .component("addGame", {
            template: require('./add-game.template.html'),
            controller: ["Player", "Games", "filterGames", "$scope",
                function createPlayerController(Player, Games, filterGames,  $scope) {
                    $scope.appendGame = false;
                    
                    $scope.$on("loadPlayer", function(e, player) {
                        $scope.player = player;
                        $scope.loadGames();
                    });
                    
                    $scope.$on("changePlayerData", function(e, player) {
                        $scope.player = player;
                        $scope.loadGames();
                    });

                    $scope.loadGames = function() {
                        Games
                            .get({platform: $scope.player.platform})
                            .$promise
                            .then(function(res) {
                                $scope.originalGames = res;
                                $scope.games = $scope.filterGames(res);
                            });
                    }


                    $scope.filterGames = function(games) {
                        return games.filter(game => 
                            filterGames.checkDateRelease(game.date_release) && 
                            filterGames.checkAgeLimit(game.rating, $scope.player.age) && 
                            filterGames.checkRepeatGame(game.id, $scope.player.games_id)
                        );
                    } 

                    $scope.addGame = function(id) {
                        $scope.appendGame = true;
                        $scope.player.games_id.push(+id);
                        //Костыль замена через пост не работает
                        Player
                            .save({
                                id: $scope.player.id,
                                nickname: $scope.player.nickname,
                                age: $scope.player.age,
                                phone: $scope.player.phone,
                                email: $scope.player.email,
                                platform: $scope.player.platform,
                                games_id: $scope.player.games_id
                            })
                            .$promise
                            .then(function(res) {
                                //по хорошему проверить статус и только тогда записать данные
                                let added_game = $scope.originalGames.filter(game => game.id === id);
                                $scope.$emit("updateGamesPlayer", added_game);
                                $scope.games = $scope.filterGames($scope.originalGames);
                            });
                    }

                    $scope.reset = function() {
                        $scope.appendGame = false;
                        $scope.game = null;
                        $scope.formAddGame.$setUntouched();
                    }
                }
            ]
        })
})();