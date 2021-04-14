(function () {
    'use strict';
    
    angular
        .module("playerService")
        .factory("Player",  ['$resource', 
            function($resource) {
                return $resource('http://localhost:3000/players/:id', {}, {
                    get: {
                        method: "GET",
                        params: {id: "@id"}
                    },
                    save: {
                        method: "PUT",
                        params: {
                            id: "@id",
                            nickname: "@nickname",
                            age: "@age",
                            phone: "@phone",
                            email: "@email",
                            platform: "@platform",
                            games_id: "@games_id"
                        }
                    },
                    create: {
                        method: "POST",
                        params: {
                            "nickname": "@nickname",
                            "age": "@age",
                            "phone": "@phone",
                            "email": "@email",
                            "platform": "@platform"
                        }
                    },
                    delete: {
                        method: "DELETE",
                        params: {id: "@id"}
                    }
                });
            }
        ])
})();