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
    $('document').ready(function(){
      $('.spinnerContainer').hide();
    });
  });
