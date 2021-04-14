  (function () {
    'use strict';
    
    angular
        .module("deletePlayer")
        .component("deletePlayer", {
            template: require('./delete-player.template.html'),
            controller: ["Player", "$scope",
                function deletePlayerController(Player, $scope) {

                    $scope.$on("loadPlayer", function(e, player) {
                        $scope.id = player.id;
                        $scope.loadNickname = player.nickname;
                    });

                    $scope.deletePlayer = function() {
                        if ($scope.nickname === $scope.loadNickname) {
                            Player
                                .delete({
                                    "id": $scope.id
                                })
                                .$promise
                                .then(function(res) {
                                    
                                });
                        }
                    }

                    $scope.reset = function() {
                        $scope.nickname = "";
                        $scope.formDeletePlayer.$setPristine();
                        $scope.formDeletePlayer.$setUntouched();
                    }
                }
            ]
        })
})();