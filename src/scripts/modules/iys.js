'use strict';

// load some stuff

var
  angular = require( 'angular' ),
  ngSanitize = require( 'angular-sanitize' ),
  uiBootstrap = require( 'angular-ui-bootstrap' ),
  iysServices = require( './iys.services' ).name,
  iysVideo = require( './iys.video' ).name,
  deps = [ ngSanitize, uiBootstrap, iysServices, iysVideo ],
  appName = 'iys',
  iysApp = angular.module( appName, deps );

// add require calls for this module's parts

// factories (services)
iysApp.service( 'IYSStateService', require( '../services/IYSStateService' ));

// controllers
iysApp.controller( 'MyFakeCtrl', require( '../controllers/MyFakeCtrl' ));
iysApp.controller( 'IYSStateController', require( '../controllers/IYSStateController' ));

// directives

module.exports = iysApp;
