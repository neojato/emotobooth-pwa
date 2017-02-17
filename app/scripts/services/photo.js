'use strict';

/**
 * @ngdoc function
 * @name app.service:PhotoService
 * @description
 * # PhotoService
 * Controller of the app
 */
angular.module('app')
  .service('PhotoService', function ($http, Config) {
    var save = function (file) {
      return $http({
        method: 'POST',
        url: Config.uploadUrl + '/photo',
        headers: {
          'Content-Type': undefined
        },
        transformRequest: angular.identity,
        data: {
          username: Config.uploadUsername,
          password: Config.uploadPassword,
          photo: file
        }
      }).then(function successCallback(response) {
        console.log(response);
      }, function errorCallback(response) {
        console.log(response);
      });
    };

    return {
      save: save
    };
  });