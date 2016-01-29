'use strict';

/**
 * @ngdoc directive
 * @name spartaFrontendApp.directive:menubar
 * @description
 * # menubar
 */
angular.module('directives.all', [])
 .directive('menu', function() {
        return {
            restrict: 'E',
            replace: true,
            link: function() {

            },
            templateUrl: "common/menu.tpl.html"
        };
    })
