'use strict';

/**
 * @ngdoc function
 * @name spartaFrontendApp.controller:YeslistCtrl
 * @description
 * # YeslistCtrl
 * Controller of the spartaFrontendApp
 */
angular.module('spartaFrontendApp')
  .controller('YeslistCtrl', function ($scope, $location, $auth, YesList, ReadArticle) {
    
    if (!$auth.isAuthenticated()) {
      $location.path('/login');
    }

  	var getArticles = function() {
  		YesList.get({}, function(data){
  		$scope.articles = data;
  		console.log(data);
  	  });
  	};
  	getArticles();

  	$scope.articleDetails = function(article){
  		ReadArticle.put({
  			'ext_id' : article.ext_id,
  		}, function(){
  			$location.path('/article/' + article.ext_id);
  		});
  	};
  });
