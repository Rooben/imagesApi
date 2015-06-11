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
    'stacked'
  ])
  .run(function(){
    angular.element(document).ready(function(){
      $('.spinnerContainer').hide();
    });
  });
