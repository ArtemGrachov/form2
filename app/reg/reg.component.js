angular.module('reg')
    .component('reg', {
        templateUrl: 'app/reg/reg.template.html',
        controller: function(phoneCodes) {
            this.phoneCountry = 'ua';

            this.selectPhoneCode = function() {
                this.phoneCode = this.phoneNumber = phoneCodes.getCode(this.phoneCountry);
            }
            this.selectPhoneCode();

            this.phoneInput = function(e) {
                if (this.phoneNumber.length <= 4 && !(/\d/).test(e.key)) {
                    this.phoneNumber = this.phoneCode;
                };
            }
            this.phoneChange = function(oldVal) {
                if (this.phoneNumber == undefined || this.phoneNumber.length < 4) {
                    this.phoneNumber = this.phoneCode;
                } else {
                    if (this.phoneNumber.indexOf(this.phoneCode) != 0 ||
                        !(/^\+[0-9]+$/).test(this.phoneNumber)) {
                        this.phoneNumber = oldVal;
                    }
                }
            }
        }
    })
    .directive('loginCheck', function() {
        return {
            require: 'ngModel',
            link: function(scope, element, attrs, ctrl) {
                ctrl.$parsers.push(function(value) {
                    if (value.length == 0) {
                        ctrl.$setValidity('length', false);
                        ctrl.$setValidity('chars', true);
                    } else {
                        ctrl.$setValidity('length', true);
                        if ((/^[а-яА-ЯіІїЇёЁa-zA-Z_]+$/).test(value)) {
                            ctrl.$setValidity('chars', true);
                        } else {
                            ctrl.$setValidity('chars', false);
                        };
                    };
                    return value;
                });
            }
        };
    })
    .directive('password', function() {
        return {
            require: 'ngModel',
            link: function(scope, element, attrs, ctrl) {
                ctrl.$parsers.push(function(value) {
                    ctrl.$setValidity('length', value.length >= 5)
                    return value;
                })
            }
        }
    })
    .directive('comparing', function() {
        return {
            require: 'ngModel',
            scope: {
                comparing: '='
            },
            link: function(scope, element, attrs, ctrl) {
                let compare = function(value) {
                    if (value === scope.comparing) {
                        ctrl.$setValidity('compare', true)

                    } else {
                        ctrl.$setDirty();
                        ctrl.$setValidity('compare', false)

                    }
                    return value;
                }
                ctrl.$parsers.unshift(compare);
                ctrl.$formatters.push(compare);

                scope.$watch('comparing', function() {
                    compare(ctrl.$viewValue);
                });
            }
        }
    })
    .directive('phoneNumber', function() {
        return {
            require: 'ngModel',
            link: function(scope, element, attrs, ctrl) {
                ctrl.$parsers.push(function(value) {
                    if (value.length >= 13) {
                        ctrl.$setValidity('length', true);
                    } else {
                        ctrl.$setValidity('length', false);
                    }
                    return value;
                })
            }
        }
    })