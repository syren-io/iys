'use strict';

var
  apiConfig = require( '../config' ),
  angular = require( 'angular' ),
  deps = [],
  moduleName = 'iys.services',
  iysServices;

// Create
iysServices = angular.module( moduleName, deps );

// constants
iysServices.constant( 'IYS_CONFIG', apiConfig );

// Services
iysServices.factory( 'IYSQuestionService', require( '../services/IYSQuestionService' ));
iysServices.factory( 'IYSStoryService', require( '../services/IYSStoryService' ));

// Exports
module.exports = iysServices;
