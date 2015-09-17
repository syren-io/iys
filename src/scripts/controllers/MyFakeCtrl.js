'use strict';

// Exports controller function with dep injection array
module.exports = [ 'IYS_CONFIG', 'IYSQuestionService', function( iysConfig, questionService ) {

  this.config = iysConfig;
  console.log( 'hi from controller' );
  questionService.getQuestionById( 20 );

}];
