'use strict';

// Exports controller function with dep injection array
module.exports = [
  '$scope',
  'IYSStateService',
  function( $scope, iysState ) {

    $scope.selectStory = function( story ) {
      return iysState.selectStory( story );
    };

  }
];
