angular.module('post')
    .component('post', {
        templateUrl: 'app/news/post/post.template.html',
        controller: function(getPosts, pageTitle, userInfo, $facebook) {
            let ctrl = this;
            ctrl.fbShare = function() {
                $facebook.ui({
                    method: 'share'
                })
            }
            ctrl.$routerOnActivate = function(next) {
                ctrl.postId = next.params.id;
                getPosts.getSingle(ctrl.postId)
                    .then(function(response) {
                        ctrl.post = response.data;
                        pageTitle.setTitle(ctrl.post.title);
                        userInfo.getInfo(ctrl.post.userId)
                            .then(function(response) {
                                ctrl.author = response.data;
                            })
                    })
                getPosts.getComments(ctrl.postId)
                    .then(function(response) {
                        ctrl.comments = response.data;
                    })

            }
            ctrl.testMap = {
                center: {
                    latitude: 48.698198,
                    longitude: 26.575646,
                },
                zoom: 12
            }
            ctrl.circleTemplate = {
                radius: 500,
                stroke: {
                    color: 'green',
                    weight: 1,
                    opacity: .8
                },
                fill: {
                    color: 'blue',
                    opacity: .1
                },
                events: {
                    click: function(e, event, scope) {
                        console.log(arguments);
                        let testWindow = new google.maps.InfoWindow({
                            content: `Test value is: <b>${scope.control.testVal}</b>`,
                            position: { lat: this.center.latitude, lng: this.center.longitude },
                            map: e.map
                        })
                    }
                }
            }
            ctrl.testCircles = [{
                    center: {
                        latitude: 48.708198,
                        longitude: 26.605646,
                    },
                    testVal: 1
                },
                {
                    center: {
                        latitude: 48.718198,
                        longitude: 26.575646,
                    },
                    testVal: 2
                },
                {
                    center: {
                        latitude: 48.698198,
                        longitude: 26.595646,
                    },
                    testVal: 3
                },
                {
                    center: {
                        latitude: 48.709198,
                        longitude: 26.559646,
                    },
                    testVal: 4
                },
                {
                    center: {
                        latitude: 48.688198,
                        longitude: 26.605646,
                    },
                    testVal: 5
                },
                {
                    center: {
                        latitude: 48.678198,
                        longitude: 26.545646,
                    },
                    testVal: 6
                },
                {
                    center: {
                        latitude: 48.688198,
                        longitude: 26.555646,
                    },
                    testVal: 7
                },
                {
                    center: {
                        latitude: 48.708198,
                        longitude: 26.575646,
                    },
                    testVal: 8
                },
                {
                    center: {
                        latitude: 48.718198,
                        longitude: 26.555646,
                    },
                    testVal: 9
                },
                {
                    center: {
                        latitude: 48.728198,
                        longitude: 26.535646,
                    },
                    testVal: 10
                }
            ]
        }
    })