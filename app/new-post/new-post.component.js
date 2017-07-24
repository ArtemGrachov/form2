angular.module('newPost')
    .component('newPost', {
        templateUrl: 'app/new-post/new-post.template.html',
        bindings: { $router: '<' },

        controller: function(sendPosts, pageTitle) {
            let ctrl = this;
            pageTitle.setTitle('New Post');

            ctrl.newPost = function() {
                ctrl.loadError = ctrl.loadSuccess = false;
                sendPosts.newPost({
                    userId: '1',
                    title: ctrl.postTitle,
                    body: ctrl.postBody
                }).then(function(response) {
                    if (response.status != 200) {
                        ctrl.loadError = true;
                    } else {
                        ctrl.loadSuccess = true;
                    }
                })
                ctrl.postTitle = '';
                ctrl.postBody = '';
            }
        }
    })