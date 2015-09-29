'use strict';

// load some stuff

var
  angular = require( 'angular' ),
  ngSanitize = require( 'angular-sanitize' ),
  ngAnimate = require( 'angular-animate' ),
  uiBootstrap = require( 'angular-ui-bootstrap' ),
  iysServices = require( './iys.services' ).name,
  iysVideo = require( './iys.video' ).name,
  deps = [ ngSanitize, ngAnimate, uiBootstrap, iysServices, iysVideo ],
  appName = 'iys',
  iysApp = angular.module( appName, deps );

// add require calls for this module's parts

// factories (services)
iysApp.factory( 'IYSStateService', require( '../services/IYSStateService' ));

// controllers
iysApp.controller( 'IYSStateController', require( '../controllers/IYSStateController' ));

// directives
iysApp.directive( 'iysUpdateState', require( '../directives/IYSUpdateStateDirective' ));

module.exports = iysApp;
