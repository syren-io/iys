'use strict';

// Exports controller function with dep injection array
module.exports = [
  'IYS_CONFIG',
  'IYSQuestionService',
  'IYSStoryService',
  function( iysConfig, questionService, storyService ) {
    this.config = iysConfig;
    console.log( 'hi from controller' );
//    questionService.getQuestionById( 20 );

    questionService.getQuestions()
      .then( function( response ) {
        console.log( 'saw in controller %o', response );
        return storyService.getStoryById( response.data[0].id );
      })
      .then( function( story ) {
        console.log( 'found story: %o', story );
        return story;
      });
  }
];
