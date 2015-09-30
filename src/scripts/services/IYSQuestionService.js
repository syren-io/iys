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
          var data = response.data;

          // add active property
          data = data.map( function( question, index ) {
            if ( question.active == null ) {
              question.active = index === 0;
            }

            return question;
          });

          return data;
        },
        // failed
        function( error ) {
          throw error;
        }
      );
  };

  return questionService;
}];
