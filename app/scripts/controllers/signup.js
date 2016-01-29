'use strict';

/**
 * @ngdoc function
 * @name spartaFrontendApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the spartaFrontendApp
 */
angular.module('spartaFrontendApp')
  .controller('SignupCtrl', ['Register', '$scope', function (Register, $scope) {


    $scope.signup = function(){

      var registerData = {
        'first_name': $scope.first_name,
        'last_name': $scope.last_name,
        'username' : $scope.username,
        'password' : $scope.password,
        'email'    : $scope.email,
        'profile' : {
          'gravatar' : '',
        }

      };
      Register.save(registerData, function(data){
        console.log(data);
      }, function(error){
        console.log(error);
        $scope.errors = error.data;
      });
    };

  }]);
