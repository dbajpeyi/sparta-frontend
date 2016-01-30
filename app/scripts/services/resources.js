'use strict';

/**
 * @ngdoc service
 * @name spartaFrontendApp.resources
 * @description
 * # resources
 * Factory in the spartaFrontendApp.
 */
 var URL_BASE = 'http://localhost:8000';
angular.module('resources.all', ['ngResource'])
  .factory('Articles', ['$resource', function ($resource) {
    return $resource(URL_BASE + '/articles', {}, {
      get: {method : 'GET', isArray : true}
    });
  }])
  .factory('Register', ['$resource', function ($resource) {
    return $resource(URL_BASE + '/user/signup', {}, {
      save: {method : 'POST'}
    });
  }])
  .factory('ArticleAction', ['$resource', function ($resource) {
    return $resource(URL_BASE + '/article/action', {}, {
      save: {method : 'POST'}
    });
  }])
  .factory('YesListCount', ['$resource', function ($resource) {
    return $resource(URL_BASE + '/user/info', {}, {
      get: {method : 'GET'}
    });
  }])
  .factory('YesList', ['$resource', function ($resource) {
    return $resource(URL_BASE + '/articles/liked', {}, {
      get: {method : 'GET', isArray:true}
    });
  }])
  .factory('ReadArticle', ['$resource', function ($resource) {
    return $resource(URL_BASE + '/article/read/:ext_id', { ext_id : '@ext_id'}, {
      put: {method : 'PUT'}
    });
  }])
   .factory('ArticleDetail', ['$resource', function ($resource) {
    return $resource(URL_BASE + '/article/:ext_id', { ext_id : '@ext_id'}, {
      get: {method : 'GET'}
    });
  }]);
