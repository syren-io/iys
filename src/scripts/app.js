'use strict';
/**
 * Created by rj on 9/10/15.
 */
var
  angular = require( 'angular' ),
  iysApp = require( './modules/iys.js' );

// bootstrap app on ready
angular.element( document ).ready( function() {
  console.log( 'bootstrappin\'' );
  angular.bootstrap( document, [ iysApp.name ]);
});

