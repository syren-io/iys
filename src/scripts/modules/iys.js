'use strict';

// load some stuff

var angular = require( 'angular' ),
  uiBootstrap = require( 'angular-ui-bootstrap' ),
  iysServices = require( './iys.services.js' ).name,
  deps = [ uiBootstrap, iysServices ],
  appName = 'iys';

module.exports = {
  module: angular.module( appName, deps ),
  dependencies: deps,
  name: appName
};

