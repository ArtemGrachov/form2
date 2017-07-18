angular.module('post')
    .component('post', {
        templateUrl: 'app/news/post/post.template.html',
        controller: function(getPosts, pageTitle, userInfo) {
            let ctrl = this;

            ctrl.$routerOnActivate = function(next) {
                ctrl.postId = next.params.id;
                getPosts.getSingle(ctrl.postId)
                    .then(function(response) {
                        ctrl.post = response.data;
                        pageTitle.setTitle(ctrl.post.title);
                        userInfo.getInfo(ctrl.post.userId)
                            .then(function(response) {
                                ctrl.author = response.data;
                            })
                    })
                getPosts.getComments(ctrl.postId)
                    .then(function(response) {
                        ctrl.comments = response.data;
                    })

            }
        }
    })