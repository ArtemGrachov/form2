angular.module('app')
    .service('phoneCodes', function() {
        let codes = {
            'ua': '+380',
            'ru': '+007',
            'be': '+375',
            'po': '+048',
            'ro': '+040',
            'md': '+373'
        };
        this.getCode = function(country) {
            return codes[country];
        }
    })