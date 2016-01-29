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
    'resources.all',
    'satellizer'
  ])
  .config(function ($routeProvider, $authProvider) {

    $authProvider.baseUrl = 'http://localhost:8000';
    $authProvider.loginUrl = '/api-token-auth';
    $authProvider.sgnupUrl = '/signup';

    $routeProvider
      .when('/articles', {
        templateUrl: 'views/articles.html',
        controller: 'ArticlesCtrl',
        controllerAs: 'articles'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/articles'
      });
  })
  .config(function ($httpProvider) {
      $httpProvider.defaults.withCredentials = false;
  });
