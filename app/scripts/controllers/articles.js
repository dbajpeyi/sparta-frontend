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

  	$scope.noMoreToShow = false;
  	$scope.isAuthenticated = function () {
  		 return $auth.isAuthenticated();  
  	};

  	$scope.gologin = function  () {
  		$location.path('/login');
  	};

  	var getArticles = function() {
  		Articles.get({}, function(data){
  		$scope.articles = data;
  		if($scope.articles.length === 0){
  			$scope.noMoreToShow = true;
  		}
  	  });
  	};

  	getArticles();

  	$scope.loadMore = function () {
  		 getArticles(); 
  	};

  	$scope.articleAction = function(article, is_liked) {
  		console.log(is_liked, article.ext_id);
  		 ArticleAction.save({
  		 	'is_liked' : is_liked,
  		 	'ext_id' : article.ext_id
  		 }, function(data){
  		 	$scope.articles = $filter('filter')($scope.articles, {'ext_id' : '!' + data.article.ext_id});
  		 });
  	};


  });
