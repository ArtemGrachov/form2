angular.module('app')
    .service('userInfo', function($http) {
        this.getInfo = function(userId) {
            return $http.get('https://jsonplaceholder.typicode.com/users/' + userId)
        };
    })