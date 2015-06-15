'use strict';

/**
 * @ngdoc function
 * @name ibmApp.directive : Image grid display Directive
 * @description
 * # Displays and animates images in a grid format
 * Directive of the ibmApp
 */
angular.module('ibmApp')
  .directive("imgDisplay", function(flickr_API){
    return {
      restrict: 'EA',
      replace: true,
      scope: {
        /* The next lin of code in this object says: the 'img' variable, which is in the parent scope view, pass it down to the
         * directive scope while giving it the name xxx (I call it here xxx, in order not to confuse the reader with img or image or item).
         * This means that all the data that img holds in the parent scope view, can now be accessed in the directive view or template,
         * which is pointed by the templateUrl in this directive,
         */
        xxx: '=imgTransporter'
      },

      link: function(scope){
        flickr_API.success(function(data){
          scope.imgs = data.photos.photo;
        }).error(function(error){
          console.log(error);
        });

        function scalePinIcon(pId, duration, value){       // Animates the image icon to grow or shrink, depending on value.
          TweenMax.to('#' + pId, duration, value);
        }

        scope.hovered = function(idx){
          idx.mausOut = true;
          scalePinIcon(idx.id, .15,  {                      //TweenMax animation scale image.
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
          scalePinIcon(idx.id, .15,  {                      //TweenMax animation return to original state
            width: "300px",
            top: '0px',
            left: '0px',
            height: "200px",
            zIndex: 10,
            ease: Linear.easeNone
          });
        };
      },
      templateUrl: '/views/grid_imageTemplate.html'
    };
  });
