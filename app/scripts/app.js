'use strict';

/**
 * @ngdoc overview
 * @name spartaFrontendApp
 * @description
 * # spartaFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('spartaFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'resources.all'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/articles', {
        templateUrl: 'views/articles.html',
        controller: 'ArticlesCtrl',
        controllerAs: 'articles'
      })
      .otherwise({
        redirectTo: '/articles'
      });
  });
