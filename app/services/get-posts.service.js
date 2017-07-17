angular.module('app')
    .service('getPosts', function($http) {
        this.getAll = function() {
            return $http.get('https://jsonplaceholder.typicode.com/posts')
        };
        this.getSingle = function(id) {
            return $http.get('https://jsonplaceholder.typicode.com/posts/' + id)
        }
    })