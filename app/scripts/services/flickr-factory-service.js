'use strict';

/**
 * @ngdoc function
 * @name ibmApp.service:flickr API factory service
 * @description
 * # flickr API service
 * Service of the ibmApp
 */
angular.module('stacked')
  .factory('flickr_API', [ '$http', 'APIKEY', 'USER_ID', function($http, secredKey, USER_ID){
    return $http({
      url: 'https://api.flickr.com/services/rest',
      method: 'GET',
      params: {method: 'flickr.people.getPublicPhotos', api_key: secredKey, user_id: USER_ID, format: 'json', nojsoncallback:1}
    });
  }]);
