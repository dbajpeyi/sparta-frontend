'use strict';

/**
 * @ngdoc function
 * @name spartaFrontendApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the spartaFrontendApp
 */
angular.module('spartaFrontendApp')
  .controller('DetailCtrl', function ($scope, $routeParams, ArticleDetail) {
  	ArticleDetail.get({
  		'ext_id' : $routeParams.ext_id
  	}, function(data){
  		$scope.article = data;
  	});
  });
