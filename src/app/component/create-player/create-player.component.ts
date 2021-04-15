  (function () {
    'use strict';
    
    angular
        .module("createPlayer")
        .component("createPlayer", {
            template: require('./create-player.template.html'),
            controller: ["Player", "$scope",
                function createPlayerController(Player, $scope) {
                    $scope.addPlayer = false;
                    $scope.createPlayer = function() {
                        if ($scope.formPlayer.$valid) {
                            Player
                                .create({
                                    "nickname": $scope.nickname,
                                    "age": $scope.age,
                                    "phone": $scope.phone,
                                    "email": $scope.email,
                                    "platform": $scope.platform,
                                    "games_id": []
                                })
                                .$promise
                                .then(function(res) {
                                    if (res.nickname && !$scope.addPlayer) {
                                        $scope.addPlayer = true;
                                        //Обновление компонента player
                                        $scope.$emit('updatePlayers', res);
                                    }
                                });
                        }
                    }
                    $scope.resetForm = function() {
                        setTimeout(function() {
                            $scope.addPlayer = false;
                        },1000);
                        $scope.nickname = $scope.age = $scope.phone = $scope.email = $scope.platform = "";
                        $scope.formPlayer.$setUntouched();
                        $scope.formPlayer.$setPristine();
                    }
                }
            ]
        })
})();