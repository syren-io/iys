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
    return $http.get( baseUrl + '/questions/vis/17' )
      .then(
        // successful
        function( response ) {
          console.log( 'got list: %o', response );
          return response;
        },
        // failed
        function( error ) {
          console.warn( 'got error: ', error );
          throw error;
        }
      );
  };

  $q.all([
    $http.get( baseUrl + '/questions/vis/17' ),
    $http.get( baseUrl + '/17/all/recent' )
  ]).then( function( results ) {
    var dataArray = results.map( function( item ) {
      return item.data.map(function( data ) { return data.id; });
    });

    console.log( 'testing, /questions/vis/17 vs /17/all/recent/' );
    console.dir( dataArray );
  });

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
