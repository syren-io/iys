'use strict';

module.exports = [ function() {
  var state = {};

  // itial state
  state.question = {
    title: 'Some Question'
  };
  state.story = {};

  state.questions = [];
  state.stories = [];

  return state;
}];
