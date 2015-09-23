'use strict';

module.exports = [ function() {
  var state = {};

  // init state
  state.questions = [];
  state.stories = [];

  state.getActiveQuestion = function() {
    var
      i = 0,
      questions = state.questions,
      length = questions.length;

    for ( ; i < length ; i++ ) {
      if ( questions[i].active ) {
        return questions[i];
      }
    }

    return {};
  };

  state.getActiveStory = function() {
    var
      i = 0,
      stories = state.stories,
      length = stories.length;

    for ( ; i < length ; i++ ) {
      if ( stories[i].active ) {
        return stories[i];
      }
    }

    return {};
  };

  return state;
}];
