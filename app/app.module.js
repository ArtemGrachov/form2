angular.module('app', [
        'ngComponentRouter',
        'ngStorage',
        'ngFacebook',
        'dash',
        'ngFileUpload',
        'uiGmapgoogle-maps',
        'cloudinary',
        'login',
        'news',
        'reg',
        'imgUpload'
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
    .config(function(CloudinaryProvider) {
        CloudinaryProvider.configure({
            cloud_name: 'dizwxgmuv',
            api_key: '381711334482573'
        });
    })