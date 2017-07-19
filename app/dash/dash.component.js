angular.module('dash')
    .component('dash', {
        templateUrl: 'app/dash/dash.template.html',
        bindings: { $router: '<' },
        controller: function(auth, pageTitle, $facebook, $window) {
            pageTitle.setTitle('Dashboard');

            let ctrl = this;

            ctrl.$routerOnActivate = function() {
                if (!auth.checkAuth()) {
                    ctrl.$router.navigate(['Login'])
                };
            }
        },
        $routeConfig: [
            { path: '/profile', name: 'Profile', component: 'profile', useAsDefault: true },
            { path: '/posts', name: 'Posts', component: 'posts' }
        ]
    })