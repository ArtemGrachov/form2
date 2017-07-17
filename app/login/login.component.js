angular.module('login')
    .component('login', {
        templateUrl: 'app/login/login.template.html',
        controller: function(auth) {
            this.submitForm = function() {
                auth.login();
            };
        }
    })