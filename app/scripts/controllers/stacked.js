'use strict';

/**
 * @ngdoc function
 * @name ibmApp.controller:StackedCtrl
 * @description
 * # StackedCtrl
 * Controller of the ibmApp
 */
angular.module('stacked', ['angularUtils.directives.dirPagination'])
  .config(function($stateProvider) {
  $stateProvider
    // STACKED STATE  ===============================
    .state('stacked', {
      url: '/',
      views: {
        '@': {
          templateUrl: 'views/stacked.html',
          controller: 'StackedCtrl'
        }
      }
    });
  })

  .controller('StackedCtrl', ['$scope', 'flickr_API', function ($scope, flickr_API) {
    flickr_API.success(function(data){
      var details = data.photos.photo;
      $scope.flickArray = details;
    }).error(function(error){
      console.log(error);
    });

    $scope.currentPage = 1;
    $scope.pageSize = 2;
  }]);
