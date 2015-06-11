'use strict';

/**
 * @ngdoc function
 * @name ibmApp.service:Text modifying filter service
 * @description
 * # Removes underscores and hyphens from the image titles.
 * Filter service of the ibmApp
 */
angular.module('ibmApp')
.filter('textModifier', function(){
  return function(inputString){
    if(typeof inputString !== 'string'){
      return inputString;
    }else{
      return inputString.toUpperCase().replace(/_|-/gi, ' ');
    }
  }
});
