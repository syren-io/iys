'use strict';

var angular = require( 'angular' ),
  deps = [],
  moduleName = 'iys.services';

module.exports = {
  module: angular.module( moduleName, deps ),
  name: moduleName,
  dependencies: deps
};
