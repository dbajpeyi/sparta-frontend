'use strict';

/**
 * @ngdoc function
 * @name spartaFrontendApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the spartaFrontendApp
 */
angular.module('spartaFrontendApp')
  .controller('LoginCtrl', ['$scope', '$auth', '$location' ,function ($scope, $auth, $location) {

    if ($auth.isAuthenticated()) {
      $location.path('/articles');
    }

    $scope.signup = function  () {
       $location.path('/signup');
    };

    $scope.login = function(){
      var credentials = {
        'username' : $scope.username,
        'password' : $scope.password
      };
      console.log(credentials);
      $auth.login(credentials).then(function(){
        $location.path('/articles');
      }, function(error){
        if (!error.data.non_field_errors){
          console.log(error.data);
        }
        $scope.error = error.data.non_field_errors[0];
      });
    };
  }]);
