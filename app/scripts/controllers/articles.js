'use strict';

/**
 * @ngdoc function
 * @name spartaFrontendApp.controller:ArticlesCtrl
 * @description
 * # ArticlesCtrl
 * Controller of the spartaFrontendApp
 */
angular.module('spartaFrontendApp')
  .controller('ArticlesCtrl', function ($scope, Articles) {
  	Articles.get({}, function(data){
  		$scope.articles = data;
  	});
  });
