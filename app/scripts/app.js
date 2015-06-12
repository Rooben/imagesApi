'use strict';

/**
 * @ngdoc overview
 * @name ibmApp
 * @description
 * # ibmApp
 *
 * Main module of the application.
 */
angular
  .module('ibmApp', [
    'ui.router',
    'stacked',
    'gridDisplay'
  ])
  .constant('APIKEY', 'a5e95177da353f58113fd60296e1d250')
  .constant('USER_ID', '132365033@N08')
  .run(function(){
    angular.element(document).ready(function(){
      $('.spinnerContainer').hide();
    });
  })
  .controller('indexController', ['$scope', '$location', function($scope, $location){
    $scope.isActive = function(route) { //used to toggle the customActive class in the nav bar.
      return route === $location.path();
    };
  }]);
