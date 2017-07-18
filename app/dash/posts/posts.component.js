angular.module('posts')
    .component('posts', {
        templateUrl: 'app/dash/posts/posts.template.html',
        controller: function(getPosts, pageTitle) {
            pageTitle.setTitle('Dashboard: posts');

            let ctrl = this;
            getPosts.getByUser(1).then(function(response) {
                ctrl.postsList = response.data;
            })
        }
    })