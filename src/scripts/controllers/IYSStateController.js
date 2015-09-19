'use strict';

// Exports controller function with dep injection array
module.exports = [
  '$scope',
  'IYSQuestionService',
  'IYSStateService',
  function( $scope, questionService, iysState ) {

    $scope.state = iysState;

    questionService.getQuestions()
      .then( function( response ) {
        var data = response.data;

        console.dir( data );
        console.dir( data[0] );

        iysState.stories = data;
        iysState.story = data[0];
      });
  }
];
