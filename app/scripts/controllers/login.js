'use strict';

/**
 * @ngdoc function
 * @name spartaFrontendApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the spartaFrontendApp
 */
angular.module('spartaFrontendApp')
  .controller('LoginCtrl', ['$scope', '$auth'  ,function ($scope, $auth) {


    $scope.login = function(){
      var credentials = {
        'username' : $scope.username,
        'password' : $scope.password
      };
      console.log(credentials);
      $auth.login(credentials).then(function(data){
        console.log(data);
      });
    };
  }]);
