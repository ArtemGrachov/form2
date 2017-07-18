angular.module('news')
    .component('news', {
        templateUrl: 'app/news/news.template.html',
        controller: function(getPosts, pageTitle) {
            pageTitle.setTitle('News');

            let ctrl = this;
            ctrl.$routerOnActivate = function(prev) {
                ctrl.pageNumber = Number(prev.params.page);
            }
            getPosts.getAll()
                .then(function(response) {
                    ctrl.allPosts = response.data;
                    let postsNumber = [0, 10];
                    if (ctrl.pageNumber) {
                        ctrl.nextPage = ctrl.pageNumber + 1;
                        ctrl.prevPage = ctrl.pageNumber - 1;
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
                    ctrl.pagination = [];
                    for (let i = (ctrl.pageNumber - 3); i <= (ctrl.pageNumber + 3) && i <= ctrl.allPosts.length / 10; i++) {
                        if (i > 0) {
                            ctrl.pagination.push(i);
                        }
                    }
                })
        }
    })