angular.module('app')
    .service('getPosts', function($http) {
        this.getAll = function() {
            return $http.get('https://jsonplaceholder.typicode.com/posts')
        };
        this.getSingle = function(id) {
            return $http.get('https://jsonplaceholder.typicode.com/posts/' + id)
        };
        this.getByUser = function(userId) {
            return $http.get('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
        };
        this.getComments = function(postId) {
            return $http.get('https://jsonplaceholder.typicode.com/comments?postId=' + postId)
        }
    })