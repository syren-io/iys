'use strict';

/**
 * @ng-controller IYSStateController
 *
 * This controller binds the overall state of the application
 *  from the IYSStateService to the scope of this controller
 *
 *  @property state.questions {Array} -- the array of questions
 *  @property state.stories {Array} -- the array of stories for this question
 *
 *  @property state.active {Object} -- an object to hold the "active" question and story
 *  @property state.active.question {Object} -- the active question
 *  @property state.active.story {Object} -- the active story (video)
 *
 *  It also performs some AJAX calls (via services) to populate the page with some starting data
 */

// so simple!
module.exports = [
  '$scope',
  'IYSStateService',
  function( $scope, stateService ) {

    // attach state service's state to this scope
    $scope.state = stateService.state;

  }
];
