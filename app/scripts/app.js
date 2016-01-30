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
    'satellizer',
    'directives.all',
  ])
  .config(function ($routeProvider, $authProvider) {

    $authProvider.baseUrl = 'http://localhost:8000';
    $authProvider.loginUrl = '/api-token-auth/';
    $authProvider.sgnupUrl = '/signup';
    $authProvider.authToken = 'JWT';


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
      .when('/yeslist', {
        templateUrl: 'views/yeslist.html',
        controller: 'YeslistCtrl',
        controllerAs: 'yeslist'
      })
      .when('/article/:ext_id', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl',
        controllerAs: 'detail'
      })
      .otherwise({
        redirectTo: '/articles'
      });
  })
  .config(function ($httpProvider) {
      $httpProvider.defaults.withCredentials = false;
  });
