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
            scope : {
             
            },
            controller : function($scope, $auth, $location, YesListCount){
              $scope.getYesList = function() {
                YesListCount.get({}, function(data){
                  $scope.yesListCount = data.count;
                  $scope.profileImage = data.gravatar; //calling this multiple times, need to change that
                });
              };
              $scope.getYesList();
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
            controllerAs : 'ctrl',
            templateUrl: 'views/menu.html'
};
});
