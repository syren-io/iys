'use strict';

// Exports controller function with dep injection array
module.exports = [
  '$scope',
  'IYSQuestionService',
  'IYSStoryService',
  'IYSStateService',
  function( $scope, questionService, storyService, iysState ) {

    // Set State Service as "state" on controller scope
    $scope.state = iysState;

    // Load up first round of info
    questionService.getQuestions()
      .then( function( data ) {
        console.dir( data );
        console.dir( data[0]);

        iysState.questions = data;

        return storyService.getStoriesForQuestionId( data[0].id );
      })
      .then( function( stories ) {
        iysState.stories = stories.map( function( story ) {
          // TODO REMOVE HACK
          if ( story.path ) {
            story.path = story.path.replace( 'nmajh.e-io', 'iys.nmajh' );
          }

          if ( story.image ) {
            story.image = story.image.replace( 'nmajh.e-io', 'iys.nmajh' );
          }

          return story;
        });

        $scope.$broadcast( 'storyChanged' );

        return stories;
      });
  }
];
