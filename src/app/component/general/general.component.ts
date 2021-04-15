(function () {
    "use strict";

    angular
        .module("general")
        .component("general", {
            template: require("./general.template.html"),
            style: require("./general.scss"),
            controller: ["$scope", function() {

            }
            ]
        })
})();