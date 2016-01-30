'use strict';

/**
 * @ngdoc function
 * @name spartaFrontendApp.controller:ArticlesCtrl
 * @description
 * # ArticlesCtrl
 * Controller of the spartaFrontendApp
 */
angular.module('spartaFrontendApp')
  .controller('ArticlesCtrl', function ($scope, $filter, Articles, ArticleAction, $auth, $location) {

  	$scope.isAuthenticated = function () {
  		 return $auth.isAuthenticated();  
  	};

  	$scope.gologin = function  () {
  		$location.path('/login');
  	};


  	$scope.articleAction = function(article, is_liked) {
  		console.log(is_liked, article.ext_id);
  		 ArticleAction.save({
  		 	'is_liked' : is_liked,
  		 	'ext_id' : article.ext_id
  		 }, function(data){
  		 	angular.forEach($scope.articles, function(item){
  		 		$scope.articles = $filter('filter')($scope.articles, {'ext_id' : '!' + data.article.ext_id})
  		 	});
  		 });
  	};

  	Articles.get({}, function(data){
  		$scope.articles = data;
  		console.log(data);
  	});

  });
