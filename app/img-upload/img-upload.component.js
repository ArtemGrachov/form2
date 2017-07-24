angular.module('imgUpload')
    .component('imgUpload', {
        templateUrl: 'app/img-upload/img-upload.template.html',
        bindings: { $router: '<' },
        controller: function(pageTitle, auth, Upload) {
            let ctrl = this;
            pageTitle.setTitle('Upload Image');
            ctrl.$routerOnActivate = function() {
                if (!auth.checkAuth()) {
                    ctrl.$router.navigate(['Login'])
                }
            }

            ctrl.imageCat = 'Other';
            ctrl.cropImage = '';
            ctrl.imageSize = '256';

            ctrl.selectFile = function(files) {
                if (files[0]) {
                    let fileReader = new FileReader();
                    fileReader.addEventListener('load', function(e) {
                        ctrl.uploadImg = e.target.result;
                    })
                    fileReader.readAsDataURL(files[0]);
                }
            }

            ctrl.uploadFiles = function(base64) {
                let file = Upload.dataUrltoBlob(base64);
                file = new File([file], 'image.jpg', { type: 'imahe/jpg' })

                ctrl.loadSuccess = false;
                ctrl.loadError = false;
                file.upload = Upload.upload({
                        url: 'https://api.cloudinary.com/v1_1/dizwxgmuv/upload',
                        data: {
                            upload_preset: 'wdmbaydv',
                            file: file,
                            folder: ctrl.imageCat
                        }
                    })
                    .progress(function(e) {
                        ctrl.loading = true;
                    })
                    .success(function(e) {
                        ctrl.loading = false;
                        ctrl.loadSuccess = true;
                    })
                    .error(function(e) {
                        ctrl.loading = false;
                        ctrl.loadError = true;
                    })

            }
        }
    })