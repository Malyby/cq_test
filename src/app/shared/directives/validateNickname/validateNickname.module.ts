(function () {
    'use strict';

    angular
        .module("validateNickname", []);
    
    require("./validateUniqueNickname.directive");
    require("./validateEqualNickname.directive");
})();