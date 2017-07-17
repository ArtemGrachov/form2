angular.module('app')
    .service('auth', function($window, $localStorage) {
        this.login = function() {
            $window.location.href = '#!/dash';
            $localStorage.auth = true;
        }
        this.logout = function() {
            $window.location.path = '';
            delete $localStorage.auth;
        }
        this.checkAuth = function() {
            return $localStorage.auth;
        }
    })