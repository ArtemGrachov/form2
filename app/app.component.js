angular.module('app')
    .value('$routerRootComponent', 'app')
    .component('app', {
        templateUrl: 'app/app.template.html',
        $routeConfig: [
            { path: '/', component: 'news', name: 'News', useAsDefault: true },
            { path: '/news/:page', component: 'news', name: 'News' },
            { path: '/reg/', component: 'reg', name: 'Reg' },
            { path: '/login/', component: 'login', name: 'Login' },
            { path: '/dash/...', component: 'dash', name: 'Dash' },
            { path: '/news/post/:id/', component: 'post', name: 'Post' },
            { path: '/img-upload/', component: 'imgUpload', name: 'ImgUpload' },
            { path: '/new-post/', component: 'newPost', name: 'NewPost' }

        ],
        controller: function(auth, $rootScope, $facebook, $localStorage, $window) {
            let ctrl = this;

            ctrl.logout = auth.logout;
            ctrl.login = auth.login;
            ctrl.checkAuth = auth.checkAuth;
            ctrl.$postLink = function() {
                $rootScope.$on('fb.auth.logout', function() {
                    delete $localStorage.auth;
                })
            }
        }
    })