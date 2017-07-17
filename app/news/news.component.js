angular.module('news')
    .component('news', {
        templateUrl: 'app/news/news.template.html',
        controller: function(getPosts) {
            let ctrl = this;
            getPosts.getAll()
                .then(function(response) {
                    ctrl.allPosts = response.data;
                    let postsNumber = [0, 10];
                    if (ctrl.pageNumber) {
                        ctrl.nextPage = Number(ctrl.pageNumber) + 1;
                        ctrl.prevPage = Number(ctrl.pageNumber) - 1;
                        postsNumber = [ctrl.pageNumber * 10 - 10, ctrl.pageNumber * 10];
                        if (postsNumber[1] >= ctrl.allPosts.length) {
                            postsNumber[1] = ctrl.allPosts.length;
                            ctrl.nextPage = undefined;
                        }
                    } else {
                        ctrl.nextPage = 2
                        ctrl.prevPage = undefined;
                    }
                    ctrl.posts = ctrl.allPosts.slice(postsNumber[0], postsNumber[1]);
                })
            ctrl.$routerOnActivate = function(prev) {
                ctrl.pageNumber = prev.params.page;
            }
        }
    })