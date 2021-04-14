(function () {
    "use strict";

    angular
        .module("gamesService")
        .factory("Games",  ["$resource",
            function($resource) {
                return $resource("http://localhost:3000/games", {}, {
                    get: {
                        method: "GET",
                        params: {
                            id: "@games_id",
                            platform: "@platform"
                        },
                        isArray: true
                    }
                });
            }
        ])
})();