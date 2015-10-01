'use strict';

// Exports controller function with dep injection array
module.exports = [
  '$scope',
  'IYSStoryService',
  function( $scope, storyService ) {

    $scope.likeStory = function( story ) {
      storyService.likeStoryById( story.id )
        .then( function( newCount ) {
          story.likes = newCount;
        });
    };

    $scope.flagStory = function( story ) {
      storyService.flagStoryById( story.id );
    };

  }
];
