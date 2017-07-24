angular.module('app')
    .service('auth', function($window, $localStorage, $facebook, $q) {
        this.login = function() {
            $window.location.href = '/#!dash';
            $localStorage.auth = true;
        }
        this.logout = function() {
            $facebook.getLoginStatus()
                .then(
                    function(response) {
                        if (response.status == 'connected') {
                            $facebook.logout();
                        }
                    }
                )
            delete $localStorage.auth;
        }
        this.checkAuth = function() {
            if ($localStorage.auth) return true;
        }
        this.fbLogin = function() {
            $facebook.login().then(
                function(response) {
                    console.log(arguments)
                    if (response.status == 'connected') {
                        $window.location.href = "";
                        $localStorage.auth = true;
                    }
                }
            )
        }
    })