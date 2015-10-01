'use strict';
/*global angular*/

// Exports controller function with dep injection array
module.exports = [
  '$scope',
  'IYSStateService',
  function( $scope, iysState ) {

    $scope.tagMatches = function( tag ) {
      var tagList = iysState.state.active.story.tags || [];

      tag = angular.lowercase( tag ) || '';

      return tagList.some( function( storyTag ) {
        return angular.lowercase( storyTag ) === tag;
      });
    };

    $scope.tagObjectToArray = function( tagCloud ) {
      var tagArray = [];

      angular.forEach( tagCloud, function( value, key ) {
        tagArray.push({
          name: key,
          count: value
        });
      });

      return tagArray;
    };

  }
];
