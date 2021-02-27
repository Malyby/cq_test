'use strict';

angular.
  module('app').
  config(['$routeProvider', '$locationProvider',
    function config($routeProvider, $locationProvider) {
      $locationProvider.html5Mode({"enabled":true, "requireBase": false});
      $routeProvider
        .when('/', {
          template: '<list-info></list-info>'
        })
        .when('/info', {
          template: '<list-info></list-info>'
        })
        .otherwise({
          redirectTo: '/'
        });
    }
  ]);