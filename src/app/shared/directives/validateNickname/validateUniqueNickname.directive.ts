(function () {
    'use strict';
    //У валидации присутсвует регистрозависимость
    angular
        .module("validateNickname")
        .directive("validateUniqueNickname", function(Search, $q) {
            return {
                require: 'ngModel',
                link:function($scope, element, attrs, ctrl) {
                    ctrl.$asyncValidators.checkUniqueNickname = function(modelValue, viewValue) {
                        const def = $q.defer()
                        Search 
                            .get({"nickname": viewValue})
                            .$promise
                            .then(function(res) {
                                if (res.length === 1 && res[0] && res[0].id !== $scope.id) {
                                    return def.reject();
                                }
                                return def.resolve();
                            });                  
                        return def.promise;
                    }
                }
            }
        })
})();