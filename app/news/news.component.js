angular.module('news')
    .component('news', {
        templateUrl: 'app/news/news.template.html',
        controller: function(getPosts) {
            let ctrl = this;

            getPosts.getAll()
                .then(function(response) {
                    ctrl.posts = response.data;
                })
        }
    })