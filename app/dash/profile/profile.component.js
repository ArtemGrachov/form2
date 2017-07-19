angular.module('profile')
    .component('profile', {
        templateUrl: 'app/dash/profile/profile.template.html',
        controller: function(userInfo, pageTitle) {
            pageTitle.setTitle('Dashboard: profile');


            let ctrl = this;

            userInfo.getInfo(1).then(function(response) {
                ctrl.user = response.data;
            })
        }
    })