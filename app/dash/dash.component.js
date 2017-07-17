angular.module('dash')
    .component('dash', {
        templateUrl: 'app/dash/dash.template.html',
        controller: function(auth, $window) {
            let ctrl = this;
            ctrl.$routerOnActivate = function() {
                if (!auth.checkAuth()) {
                    $window.location.path = '#!login';
                }
            }
        }
    })