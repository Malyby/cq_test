(function () {
    "use strict";

    angular
        .module("gamesList")
        .component("gamesList", {
            template: require("./games-list.template.html"),
            style: require("./games-list.scss"),
            controller: ["$scope", "Games",
                function PlayersListController($scope, Games) {
                    Games
                        .get()
                        .$promise
                        .then(function(res) {
                            $scope.games = res;
                        });

                    $scope.checkDateRelease = function(data_release) {
                        const current_date = new Date().getTime();
                        if (data_release > current_date) {
                            return true
                        }
                    }
                }
            ]
        })
})();