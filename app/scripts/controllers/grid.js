'use strict';

/**
 * @ngdoc function
 * @name ibmApp.controller:GridCtrl
 * @description
 * # GridCtrl
 * Controller of the ibmApp
 */
angular.module('gridDisplay', ['ngResource', 'ui.bootstrap'])
  .config(function($stateProvider) {
    $stateProvider
      // GRID STATE  ===============================
      .state('grid', {
        url: '/grid',
        views: {
          '@': {
            templateUrl: 'views/grid.html',
            controller: 'GridCtrl'
          }
        }
      });
  })

  .controller('GridCtrl', ['$scope', 'flickr_API', function ($scope, flickr_API) {
    flickr_API.success(function(data){
      $scope.imgs = data.photos.photo;
    }).error(function(error){
      console.log(error);
    });

  }]);

