(function () {
    "use strict";

    angular
        .module("playersList")
        .component("playersList", {
            template: require("./players-list.template.html"),
            style: require("./players-list.scss"),
            controller: ["$scope", "Search", "Players",
                function PlayersListController($scope, Search, Players) {
                    $scope.searchText = "";
                    
                    Players
                        .get()
                        .$promise
                        .then(function(res) {
                            $scope.players = $scope.originalPlayers = res;
                        });

                    $scope.search = function() {
                        if ($scope.searchText) {
                            Search
                                .search({"q": $scope.searchText})
                                .$promise
                                .then(function (res) {
                                    $scope.players = res.filter(item => item.nickname.toLowerCase().includes($scope.searchText.toLowerCase()));
                                });
                        } else {
                            $scope.players = $scope.originalPlayers;
                        }
                    }
                    //Обновление списка игроков после добавления нового
                    $scope.$on("updatePlayers", function(e, player) {
                        $scope.originalPlayers.push(player);
                    });
                }
            ]
        })
})();