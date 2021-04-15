(function () {
    'use strict';
    //У валидация присутсвует регистрозависимость
    angular
        .module("validateNickname")
        .directive("validateEqualNickname", function(Search, $q) {
            return {
                require: 'ngModel',
                link:function($scope, element, attrs, ctrl) {
                    ctrl.$validators.checkEqualNickname = function(modelValue, viewValue) {
                        if ($scope.loadNickname === viewValue) {
                                return true;
                        }
                        return false;
                    }
                }
            }
        });
})();