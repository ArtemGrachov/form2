angular.module('login')
    .component('login', {
        templateUrl: 'app/login/login.template.html',
        bindings: { $router: '<' },

        controller: function(auth, pageTitle) {
            pageTitle.setTitle('Sign in');
            let ctrl = this;

            ctrl.$routerOnActivate = function() {
                if (auth.checkAuth()) {
                    ctrl.$router.navigate(['Dash'])
                }
            }
            ctrl.submitForm = function() {
                auth.login();
            };
        },
        $routerConfig: [
            { path: '/', name: 'TestPage', component: 'testPage' }

        ]
    })
    .component('testPage', {
        template: '<h1>testPage</h1>'
    })