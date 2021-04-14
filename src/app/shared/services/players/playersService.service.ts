(function () {
    "use strict";

    angular
        .module("playersService")
        .factory("Players",  ["$resource",
            function($resource) {
                return $resource("http://localhost:3000/players", {}, {
                    get: {
                        method: "GET",
                        isArray: true
                    }
                });
            }
        ])
})();