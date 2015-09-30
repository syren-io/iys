'use strict';

module.exports = [
  '$rootScope',
  '$timeout',
  'IYSQuestionService',
  'IYSStoryService',
  function( $rootScope, $timeout, questionService, storyService ) {
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

    // broadcast functions are wrapped in timeouts so the
    // broadcast action is delayed to the "next" event loop
    // why angular doesn't do this by default I don't know
    broadcastQuestionChange = function( question ) {
      $timeout( function() {
        $rootScope.$broadcast( 'IYSQuestionChanged', question );
      });
    };

    broadcastStoryChange = function( story ) {
      $timeout( function() {
        $rootScope.$broadcast( 'IYSStoryChanged', story );
      });
    };

    /**
     * @method selectQuestionById
     * @param {number} questionId -- The ID of the question to lookup in state.questions
     * @returns {boolean} true if the question id was found, false otherwise
     */
    service.selectQuestionById = function( questionId ) {
      return state.questions.some( function( question ) {
        if ( question.id === questionId ) {
          // update question & stop looping
          service.selectQuestion( question );
          return true;
        }

        // continue looping
        return false;
      });
    };

    /**
     * @method selectQuestion
     * @param {IYSQuestion} question -- a question object to set to state.active.question
     * @returns {Promise<IYSQuestion>} -- resolves to the question object after the stories have been fetched
     */
    service.selectQuestion = function( question ) {
      // update active, broadcast to scopes
      state.active.question = question;
      broadcastQuestionChange( question );

      // update stories and return promise that resolves to question when stories are loaded
      return storyService.getStoriesForQuestionId( question.id )
        .then( function( stories ) {
          // update stories to be the ones for this question
          service.updateStories( stories );
          return question;
        });
    };

    /**
     * @method updateStories
     * @param {Array<IYSStory>} stories -- An array of IYS story objects
     * @returns {boolean} -- always true
     */
    service.updateStories = function( stories ) {
      state.stories = stories;
      service.selectStory( stories[0]);
      return true;
    };

    /**
     * @method selectStoryById
     * @param {number} storyId -- the story id to look up in state.stories
     * @returns {boolean} -- true if a story with id was found, false otherwise
     */
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

    /**
     * @method selectStory
     * @param {IYSStory} story -- the story object to set to state.active.story
     * @returns {boolean} -- always true
     */
    service.selectStory = function( story ) {
      // update active, broadcast to scopes
//      story.active = true;
      state.active.story = story;
      broadcastStoryChange( story );

      // nothing else needed
      return true;
    };


    /*** RUN ***/
    /*** Load up first page of questions ***/
    questionService.getQuestions()
      .then( function( questions ) {
        console.log( 'initial load selection: question selected: ' + questions[0].id + ', ' + questions[0].text );

        // update "state"
        state.questions = questions;

        return service.selectQuestion( questions[0]);
      });

    return service;
  }
];
