(function () {
    'use strict';
    
    angular
        .module("searchService")
        .factory("Search",  ['$resource', 
            function($resource) {
                return $resource('http://localhost:3000/players', {}, {
                    search: {
                        method: 'GET',
                        params: {"q": "@q"},
                        isArray: true
                    },
                    get: {
                        method: "GET",
                        params: {
                            "nickname": "@nickname",
                            "email": "@email",
                            "phone": "@phone"
                        },
                        isArray: true
                    }
                });
            }
        ])
})();