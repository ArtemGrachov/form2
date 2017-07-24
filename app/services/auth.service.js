angular.module('app')
    .service('auth', function($window, $rootScope, $localStorage, $facebook, $q, $http) {
        let login = function() {
            $localStorage.auth = true;
            $window.location.href = '/#!dash';
        }

        let logout = function() {
            delete $localStorage.auth;
            $window.location.href = '/';
        }

        this.checkAuth = function() {
            if ($localStorage.auth) return true;
        }

        this.login = function() {
            if (true) {
                login();
            }
        }

        this.logout = function() {
            logout();
            $facebook.getLoginStatus()
                .then(
                    function(response) {
                        if (response.status == 'connected') {
                            $facebook.logout();
                        }
                    }
                )
        }

        this.fbLogin = function() {
            $facebook.login().then(
                function(response) {
                    if (response.status == 'connected') {
                        login();
                    }
                }
            )
        }

        this.reg = function(user) {
            return $http({
                method: 'POST',
                url: 'http://localhost:3012/users',
                data: user
            })
        }
    })