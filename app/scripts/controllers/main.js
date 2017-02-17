'use strict';

/**
 * @ngdoc function
 * @name app.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the app
 */
angular.module('app')
  .controller('MainCtrl', function ($scope, $timeout, PhotoService) {
    var vm = this;

    var dataURItoBlob = function (dataURI) {
      var byteString, mimeString;
      if (dataURI.split(',')[0].indexOf('base64') !== -1) {
        byteString = atob(dataURI.split(',')[1]);
      } else {
        byteString = decodeURI(dataURI.split(',')[1]);
      }
      mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
      var content = new Array();
      for (var i = 0; i < byteString.length; i++) {
        content[i] = byteString.charCodeAt(i);
      }
      return new Blob([new Uint8Array(content)], {type: mimeString});
    };

    vm.handleImageAdd = function () {
      $timeout(function () {
        var compressed = vm.photo.compressed;
        PhotoService.save(dataURItoBlob(compressed.dataURL));
      }, 2000);
    };

    $scope.$watch('vm.photo', function() {
      document.getElementById('photo').addEventListener('change', vm.handleImageAdd, false);
    }, true);
  });
