'use strict';

module.exports = [ 'IYS_CONFIG', '$http', '$q', function( iysConfig, $http, $q ) {
  var
    baseUrl = iysConfig.api.url,
    questionService = {};

  // :questionId/:tag/:sort/:page

  // questionId
  //  - "list"
  //  - id

  // tag
  //  - "all"
  //  - "featured"

  // sort
  //  - "liked"
  //  - "recent"

  // page
  //  - who knows?

  /////
  // questions/:kind/:questionId

  // kind
  //  - "prompter" -- list of active questions
  //  - "vis" -- as above but limited to questions with approved stories
  //    + questionId -- returns <= 10 random associated stories

  /**
   *
   * @returns {Promise} - returns an $http service promise
   */
  questionService.getQuestions = function() {
    return $http.get( baseUrl + '/list' )
      .then(
        // successful
        function( response ) {
          console.log( 'got list: %o', response.data );
          return response.data;
        },
        // failed
        function( error ) {
          console.warn( 'got error: ', error );
          throw error;
        }
      );
  };

  /**
   *
   * @param {number} id - the question id to look up
   * @returns {undefined}
   */
  questionService.getQuestionById = function( id ) {
    console.warn( 'Can not look up question by id :(' );
    return $q.resolve( null );

    /*
    console.log( 'looking up %d', id );
    return $http.get( baseUrl + '/questions/vis/' + id )
      .then(function( response ) {
        return response.data;
      });
    */
  };

  return questionService;
}];
