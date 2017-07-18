angular.module('post')
    .component('post', {
        templateUrl: 'app/news/post/post.template.html',
        controller: function(getPosts, pageTitle) {
            let ctrl = this;

            ctrl.$routerOnActivate = function(next) {
                ctrl.postId = next.params.id;
                getPosts.getSingle(ctrl.postId)
                    .then(function(response) {
                        ctrl.post = response.data;
                        pageTitle.setTitle(ctrl.post.title);

                    })
                getPosts.getComments(ctrl.postId)
                    .then(function(response) {
                        ctrl.comments = response.data;
                    })

            }
        }
    })