angular.module('imgUpload')
    .component('imgUpload', {
        templateUrl: 'app/img-upload/img-upload.template.html',
        controller: function(pageTitle, Upload) {
            pageTitle.setTitle('Upload Image');
            let ctrl = this;
            ctrl.filesToUpload = [];
            ctrl.imageCat = 'Other'

            ctrl.uploadFiles = function(files) {
                ctrl.images = [];
                ctrl.loadSuccess = false;
                ctrl.loadError = false;

                for (let i = 0; i < files.length; i++) {
                    let file = files[i];

                    file.upload = Upload.upload({
                            url: 'https://api.cloudinary.com/v1_1/dizwxgmuv/upload',
                            data: {
                                upload_preset: 'wdmbaydv',
                                file: file,
                                folder: ctrl.imageCat
                            }
                        })
                        .progress(function(e) {
                            // console.log(e);
                        })
                        .success(function(e) {
                            ctrl.loadSuccess = true;
                            ctrl.images.push(e);
                            // console.log(e);
                        })
                        .error(function(e) {
                            ctrl.loadError = false;
                            // console.log(e);
                        })

                }
            }
        }
    })