angular.module('app', [
        'ngComponentRouter',
        'ngStorage',
        'ngFacebook',
        'dash',
        'login',
        'news',
        'reg',
        'uiGmapgoogle-maps'
    ])
    .config(function($facebookProvider) {
        $facebookProvider.setAppId(475721832781947);
        $facebookProvider.setCustomInit({
            cookie: true
        })
    })
    .run(function($rootScope) {
        (function() {
            if (document.getElementById('facebook-jssdk')) { return; }
            let firstScriptElement = document.getElementsByTagName('script')[0];
            let facebookJS = document.createElement('script');
            facebookJS.id = 'facebook-jssdk';
            facebookJS.src = '//connect.facebook.net/en_US/all.js';
            firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
        }());
    })