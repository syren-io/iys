'use strict';

module.exports = [
  '$rootScope',
  'IYSQuestionService',
  'IYSStoryService',
  function( $rootScope, questionService, storyService ) {
    var
      // the service instance
      service = {
        // state is stored on service instance so it is also a singleton
        // then bound to the template with the IYSStateController
        state: {
          questions: [],
          stories: [],
          active: {
            question: {},
            story: {}
          }
        }
      },
      // internal helper functions
      broadcastQuestionChange,
      broadcastStoryChange,
      // alias for convenience (JS Objects are by reference)
      state = service.state;

//    console.log( 'stateCtrl: %o', state );

    broadcastQuestionChange = function( question ) {
      $rootScope.$broadcast( 'IYSQuestionChanged', question );
    };

    broadcastStoryChange = function( story ) {
      $rootScope.$broadcast( 'IYSStoryChanged', story );
    };

    service.selectQuestionById = function( qId ) {
      return state.questions.some( function( question ) {
        if ( question.id === qId ) {
          // update question & stop looping
          service.selectQuestion( question );
          return true;
        }

        // continue looping
        return false;
      });
    };

    service.selectQuestion = function( question ) {
      // update active, broadcast to scopes
      state.active.question = question;
      broadcastQuestionChange( question );

      // update stories and return promise that resolves to question when stories are loaded
      return storyService.getStoriesForQuestionId( question.id )
        .then( function( stories ) {
          // update stories to be the ones for this question
          state.stories = stories;
          service.selectStory( stories[0]);
          return question;
        });
    };

    service.selectStoryById = function( storyId ) {
      return state.stories.some( function( story ) {
        if ( story.id === storyId ) {
          // update story & stop looping
          service.selectStory( story );
          return true;
        }

        return false;
      });
    };

    service.selectStory = function( story ) {
      // update active, broadcast to scopes
      state.active.story = story;
      broadcastStoryChange( story );

      // nothing else needed
      return true;
    };

    // Load up first page of questions
    questionService.getQuestions()
      .then( function( data ) {
        console.log( 'initial load selection: question selected: ' + data[0].id + ', ' + data[0].text );

        // update "state"
        state.questions = data;

        return service.selectQuestion( data[0]);
      });

    // TODO REMOVE (EXPORTED FOR TESTING)
    window.iysState = service;

    return service;
  }
];
