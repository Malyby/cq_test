  (function () {
    'use strict';
    
    angular
        .module("editPlayer")
        .component("editPlayer", {
            template: require('./edit-player.template.html'),
            controller: ["Player", "filterGames", "$scope",
                function editPlayerController(Player, filterGames, $scope) {
                    $scope.editPlayer = false;
                    $scope.$on("loadPlayer", function(e, player) {
                        $scope.player = player;
                        $scope.id = player.id;
                        $scope.nickname = player.nickname;
                        $scope.age = player.age;
                        $scope.phone = player.phone;
                        $scope.email = player.email;
                        $scope.platform = player.platform;
                        $scope.games_id = player.games_id;
                        $scope.formEditPlayer.$setPristine();
                    });

                    $scope.$on("loadGames", function(e, player_games) {
                        $scope.player_games = player_games;
                    });
                    
                    $scope.updatePlayer = function() {
                        $scope.updateGame($scope.age, $scope.platform);
                        Player
                            .save({
                                "id": $scope.id,
                                "nickname": $scope.nickname,
                                "age": +$scope.age,
                                "phone": $scope.phone,
                                "email": $scope.email,
                                "platform": $scope.platform,
                                "games_id": $scope.games_id
                            })
                            .$promise
                            .then(function(res) {
                                $scope.editPlayer = true;
                                $scope.$emit("updatePlayer", res);
                                $scope.$emit("rewriteGamesPlayer", $scope.player_games);
                            });
                    }

                    $scope.updateGame = function(age, playform) {
                        if (age != $scope.player.age) {
                           $scope.player_games = $scope.player_games.filter(game => filterGames.checkAgeLimit(game.rating, age));
                           $scope.games_id = $scope.player_games.map(game => game.id);
                        }
                        if (playform != $scope.player.platform) {
                            $scope.player_games = [];
                            $scope.games_id = [];
                        }
                    }

                    //Присваем исходные данные обратно
                    $scope.reset = function() {
                        $scope.editPlayer = false;
                        $scope.nickname = $scope.player.nickname;
                        $scope.age = $scope.player.age;
                        $scope.phone = $scope.player.phone;
                        $scope.email = $scope.player.email;
                        $scope.platform = $scope.player.platform;
                        $scope.formEditPlayer.$setPristine();
                    }
                }
            ]
        })
})();