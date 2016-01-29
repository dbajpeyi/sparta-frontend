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
            controller : function($scope, $auth, $location){
              $scope.logout = function(){
                $auth.logout();
                $location.path('/login');
              };

              $scope.yesList = function(){
                $location.path('/articles');
              };
            },
            link: function() {

            },
            templateUrl: 'views/menu.html'
};
});
