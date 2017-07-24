angular.module('reg')
    .component('reg', {
        templateUrl: 'app/reg/reg.template.html',
        bindings: { $router: '<' },
        controller: function(phoneCodes, pageTitle, auth) {
            pageTitle.setTitle('Registration');
            let ctrl = this;

            ctrl.$postLink = function() {
                if (auth.checkAuth()) {
                    ctrl.$router.navigate(['Dash'])
                }
            }

            ctrl.phoneCountry = 'ua';
            ctrl.submitForm = function() {
                auth.reg({
                    username: ctrl.login,
                    password: ctrl.password,
                    phone: ctrl.phoneNumber
                }).then(
                    function(response) {
                        if (response.status == 200) {
                            auth.login();
                        } else {
                            ctrl.regError = true;
                        }
                    }
                )
            };
            ctrl.selectPhoneCode = function() {
                ctrl.phoneCode = ctrl.phoneNumber = phoneCodes.getCode(ctrl.phoneCountry);
            }
            ctrl.selectPhoneCode();
            ctrl.phoneInput = function(e) {
                if (ctrl.phoneNumber.length <= 4 && !(/\d/).test(e.key)) {
                    ctrl.phoneNumber = ctrl.phoneCode;
                };
            }
            ctrl.phoneChange = function(oldVal) {
                if (ctrl.phoneNumber == undefined || ctrl.phoneNumber.length < 4) {
                    ctrl.phoneNumber = ctrl.phoneCode;
                } else {
                    if (ctrl.phoneNumber.indexOf(ctrl.phoneCode) != 0 ||
                        !(/^\+[0-9]+$/).test(ctrl.phoneNumber)) {
                        ctrl.phoneNumber = oldVal;
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