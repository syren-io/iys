'use strict';

module.exports = [ 'IYS_CONFIG', '$http', function( iysConfig, $http ) {
  var questionService = {};

  console.log( 'hello factory' );
  console.dir( iysConfig );

  /**
   *
   * @param {number} id - the question id to look up
   * @returns {undefined}
   */
  questionService.getQuestionById = function( id ) {
    console.log( 'looking up %d', id );
  };

  return questionService;
}];
