'use strict';
/**
 * Created by rj on 9/10/15.
 */
var
  angular = require( 'angular' ),
  iysApp = require( './modules/iys.js' );

// debug
console.dir({
  iysApp: iysApp
});

// bootstrap app on ready
angular.element( document ).ready( function() {
  console.log( 'bootstrapping' );
  angular.bootstrap( document, [ iysApp.name ]);
});

