'use strict';

/**
 * @ngdoc function
 * @name ibmApp.controller:GridCtrl
 * @description
 * # GridCtrl
 * Controller of the ibmApp
 */
angular.module('gridDisplay', ['ngResource'])
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
  }])


  .directive("pinDisplay", function(){
    return {
      replace: true,
      scope: {
        img: '=pinDisplay'
      },
      templateUrl: '/views/grid_imageTemplate.html',
      link: function(scope, elmt, attr){
        function scalePinIcon(pId, duration, value){                // Animates the image icon to grow or shrink, depending on value.
          TweenMax.to('#' + pId, duration, value);
        }

        scope.hovered = function(idx){
          idx.mausOut = true;
          scalePinIcon(idx.id, .15,  {                            //TweenMax animation scale image.
            position: 'absolute',
            width: "320px",
            top: '-10px',
            left: '-10px',
            height: "220px",
            zIndex: 900,
            ease: Linear.easeNone
          });
        };

        scope.unhovered = function(idx){
          position: 'relative',
          idx.mausOut = false;
          scalePinIcon(idx.id, .15,  {           //TweenMax animation return to original state
            width: "300px",
            top: '0px',
            left: '0px',
            height: "200px",
            zIndex: 10,
            ease: Linear.easeNone
          });
        };
      }

    };
  });
