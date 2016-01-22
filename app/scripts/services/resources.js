'use strict';

/**
 * @ngdoc service
 * @name spartaFrontendApp.resources
 * @description
 * # resources
 * Factory in the spartaFrontendApp.
 */
 var URL_BASE = 'https://localhost:8000';
angular.module('resources.all', ['ngResource'])
  .factory('Articles', ['$resource', function ($resource) {
    return $resource(URL_BASE + '/articles', {}, {
      query: {method : 'GET'}
    });   
  }]);