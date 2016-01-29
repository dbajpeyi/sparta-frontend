'use strict';

/**
 * @ngdoc function
 * @name spartaFrontendApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the spartaFrontendApp
 */
angular.module('spartaFrontendApp')
  .controller('LoginCtrl', ['$scope' ,function ($scope) {
    $scope.login = function(){
      console.log('login');
    };
  }]);
