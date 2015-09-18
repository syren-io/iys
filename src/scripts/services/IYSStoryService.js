'use strict';

module.exports = [ 'IYS_CONFIG', '$http', '$q', function( iysConfig, $http, $q ) {
  var
    baseUrl = iysConfig.api.url,
    storyService = {};

  // stories/:storyId

  // storyId
  //  - empty -- Error
  //  - if not approved returns "rejected page"
  //  - renders page
  //    - details, story code, story token, tags, thumbnail

  /**
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
