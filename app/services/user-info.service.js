angular.module('app')
    .service('userInfo', function($http) {
        this.getInfo = function() {
            return $http.get('https://jsonplaceholder.typicode.com/users/1')
        };
    })