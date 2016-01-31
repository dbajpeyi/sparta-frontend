'use strict';

/**
 * @ngdoc function
 * @name spartaFrontendApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the spartaFrontendApp
 */
angular.module('spartaFrontendApp')
  .controller('DetailCtrl', function ($scope, $routeParams, $auth, $location, ArticleDetail) {

  	if (!$auth.isAuthenticated()) {
      $location.path('/login');
    }

  	ArticleDetail.get({
  		'ext_id' : $routeParams.ext_id
  	}, function(data){
  		$scope.article = data;
  	});
  });
