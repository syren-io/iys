'use strict';
/**
 * Created by rj on 9/10/15.
 */
var
  videojs = require( './video.js' ),
  angular = require( 'angular' ),
  uiBootstrap = require( 'angular-ui-bootstrap' ),
  iysApp = require( './modules/iys.js' );

console.dir({
  'angular': angular,
  'videojs': videojs,
  'iysApp': iysApp
});

setTimeout( function() {
  console.warn( 'hello people' ); //eslint-disable-line
}, 5000 );
