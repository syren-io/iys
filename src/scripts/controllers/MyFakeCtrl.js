'use strict';

// Exports controller function with dep injection array
module.exports = [
  'IYS_CONFIG',
  'IYSQuestionService',
  'IYSStoryService',
  'IYSStateService',
  function( iysConfig, questionService, storyService, stateService ) {
    this.config = iysConfig;
    console.log( 'hi from controller' );
//    questionService.getQuestionById( 20 );

    questionService.getQuestions()
      .then( function( response ) {
        console.log( 'saw in controller %o', response );
        stateService.question = response.data[0];
        return storyService.getStoryById( response.data[0].id );
      })
      .then( function( story ) {
        console.log( 'found story: %o', story );
        return story;
      });
  }
];
