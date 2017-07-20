angular.module('login')
    .component('login', {
        templateUrl: 'app/login/login.template.html',
        bindings: { $router: '<' },

        controller: function(auth, pageTitle, $facebook) {
            pageTitle.setTitle('Sign in');
            let ctrl = this;

            ctrl.$routerOnActivate = function() {
                if (auth.checkAuth()) {
                    ctrl.$router.navigate(['Dash'])
                }
            }
            ctrl.submitForm = auth.login;
            ctrl.fbLogin = function() {
                auth.fbLogin();
            }
        },
        $routerConfig: [
            { path: '/', name: 'TestPage', component: 'testPage' }

        ]
    })