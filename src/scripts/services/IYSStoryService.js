'use strict';

module.exports = [ 'IYS_CONFIG', '$http', '$q', function( iysConfig, $http, $q ) {
  var
    baseUrl = iysConfig.api.url,
    storyService = {};

  // get the stories array
  // using: 'iys/questions/vis/:questionId'
  storyService.getStoriesForQuestionId = function( qId ) {
    return $http.get( baseUrl + '/questions/vis/' + qId )
      .then( function( response ) {
        var
          stories = response.data,
          // clean url helper
          rewriteHost = function( url ) { return url.replace( 'nmajh.e-io', 'iys.nmajh' ); };

        // TODO REMOVE CLEAN DATA HACK
        stories = stories.map( function( story, index ) {
          if ( story.path && typeof story.path === 'string' ) {
            story.path = rewriteHost( story.path );
          }

          if ( story.image && typeof story.image === 'string' ) {
            story.image = rewriteHost( story.image );
          }

          return story;
        });
        // END Clean Data Hack

//        console.log( 'found stories %o', stories );
        return stories;
      });
  };

  // stories/:storyId

  // storyId
  //  - empty -- Error
  //  - if not approved returns "rejected page"
  //  - renders page
  //    - details, story code, story token, tags, thumbnail

  /**
   * TODO CHECK THIS
   * @param {number} id -- the story id
   * @returns {Promise} -- the $http promise or a TypeError
   */
  storyService.getStoryById = function( id ) {
    if ( id == null ) {
      return $q.reject( new TypeError( 'Required "id" parameter is missing!' ));
    }

    return $http.get( baseUrl + '/stories/' + id );
  };

  return storyService;
}];
