angular.module('app')
    .service('pageTitle', function($rootScope) {
        this.setTitle = function(title) {
            $rootScope.pageTitle = 'SomeSite ' + title;
        }
    })