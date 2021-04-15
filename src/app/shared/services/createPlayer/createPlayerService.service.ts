(function () {
    'use strict';
    
    angular
        .module("createPlayerService")
        .factory("createPlayer",  ['$resource', 
            function($resource) {
                return $resource('http://localhost:3000/players/', {id: '@id'});
            }
        ])
})();