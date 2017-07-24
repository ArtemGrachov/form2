angular.module('app')
    .service('sendPosts', function($http) {
        this.newPost = function(postObj) {
            return $http({
                method: 'POST',
                url: 'http://localhost:3012/posts',
                data: postObj
            })
        }
    })