'use strict';

module.exports = [ 'IYS_CONFIG', '$http', '$q', function( iysConfig, $http, $q ) {
  var
    baseUrl = iysConfig.api.url,
    storyService = {};

  // get the stories array
  // using: 'iys/:questionId/all/recent'
  // TODO: Add Pagination?
  storyService.getStoriesForQuestionId = function( questionId ) {
    return $http.get( baseUrl + '/' + questionId + '/all/recent' )
      .then( function( response ) {
        var stories = response.data;

        // Build Image URL for Story Thumbnails
        stories = stories.map( function( story ) {
          story.image = '//' + iysConfig.api.hostname + '/images/iys/exact/768/432/' + story.image_id + '.png';
          return story;
        });

        return stories;
      });
  };

  // like story by id
  // return new like count for story
  storyService.likeStoryById = function( storyId ) {
    return $http.post(
      baseUrl + '/stories/like',
      'story_id=' + storyId,
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      }
    )
      .then( function( response ) {
        var likeCount = response.data;
        return likeCount;
      });
  };


  // flag story by id
  storyService.flagStoryById = function( storyId ) {
    return $http.post(
      baseUrl + '/stories/flag',
      'story_id=' + storyId,
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      }
    );
  };

  return storyService;
}];
