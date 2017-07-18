angular.module('login')
    .component('login', {
        templateUrl: 'app/login/login.template.html',
        controller: function(auth, pageTitle) {
            pageTitle.setTitle('Sign in');

            this.submitForm = function() {
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