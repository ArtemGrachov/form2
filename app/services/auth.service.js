angular.module('app')
    .service('auth', function($window, $localStorage, $facebook, $q) {
        this.login = function() {
            $window.location.href = '/#!dash';
            $localStorage.auth = true;
        }
        this.logout = function() {
            delete $localStorage.auth;
            $facebook.getLoginStatus()
                .then(
                    function(response) {
                        if (response.status == 'connected') {
                            $facebook.logout();
                        }
                    }
                )
        }
        this.checkAuth = function() {
            if ($localStorage.auth) return true;
        }
        this.fbLogin = function() {
            $facebook.login().then(
                function() {
                    // $window.location.href = "";
                    $localStorage.auth = true;
                }
            )
        }
    })