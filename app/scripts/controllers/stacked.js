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
  .constant('APIKEY', 'a5e95177da353f58113fd60296e1d250')
  .constant('USER_ID', '132365033@N08')

  .controller('StackedCtrl', ['$scope', '$http', 'APIKEY', 'USER_ID', function ($scope, $http, secredKey, USER_ID) {
    $http({
      url: 'https://api.flickr.com/services/rest',
      method: 'GET',
      params: {method: 'flickr.people.getPublicPhotos', api_key: secredKey, user_id: USER_ID, format: 'json', nojsoncallback:1}
    }).success(function(data){
      var details = data.photos.photo;
      console.log(details);
      $scope.flickArray = details;
    }).error(function(error){
      console.log(error);
    });

    $scope.currentPage = 1;
    $scope.pageSize = 2;

  }])
  .filter('textmodifier', function(){
    return function(targetedString){

    }
  });
