angular.module('profile')
    .component('profile', {
        templateUrl: 'app/dash/profile/profile.template.html',
        controller: function(userInfo, pageTitle) {
            pageTitle.setTitle('Dashboard: profile');

            let ctrl = this;

            userInfo.getInfo().then(function(response) {
                ctrl.user = response.data;
            })
        }
    })