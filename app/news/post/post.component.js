angular.module('post')
    .component('post', {
        templateUrl: 'app/news/post/post.template.html',
        controller: function(getPosts) {
            let ctrl = this;

            ctrl.$routerOnActivate = function(next, prev) {
                ctrl.postId = next.params.id;
                getPosts.getSingle(ctrl.postId)
                    .then(function(response) {
                        ctrl.post = response.data;
                    })
            }
        }
    })