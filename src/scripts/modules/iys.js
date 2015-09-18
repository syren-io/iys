'use strict';

// load some stuff

var
  angular = require( 'angular' ),
  uiBootstrap = require( 'angular-ui-bootstrap' ),
  iysServices = require( './iys.services' ).name,
  deps = [ uiBootstrap, iysServices ],
  appName = 'iys',
  iysApp = angular.module( appName, deps );

// add require calls for this module's parts

// controllers
iysApp.controller( 'MyFakeCtrl', require( '../controllers/MyFakeCtrl' ));

// directives

module.exports = iysApp;
