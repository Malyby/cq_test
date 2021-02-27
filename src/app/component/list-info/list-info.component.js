angular
    .module("listInfo")
    .component("listInfo", {
        templateUrl: 'component/list-info/list-info.template.html',
        controller: ['$http', function ListInfoController($http) {
                var self = this;
                
                $http.get("http://localhost:3000/posts")
                    .then(function(res) {
                        self.infos = res.data;
                    });
        }]
    });
