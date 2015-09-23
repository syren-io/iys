'use strict';

var
  apiConfig = require( '../config' ),
  angular = require( 'angular' ),
  deps = [],
  iysServices;

// Create
iysServices = angular.module( 'iys.services', deps );

// constants
iysServices.constant( 'IYS_CONFIG', apiConfig );

// Services
iysServices.factory( 'IYSQuestionService', require( '../services/IYSQuestionService' ));
iysServices.factory( 'IYSStoryService', require( '../services/IYSStoryService' ));

// Exports
module.exports = iysServices;
