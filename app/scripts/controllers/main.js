'use strict';

/**
 * @ngdoc function
 * @name ibmApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ibmApp
 */
angular.module('ibmApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
