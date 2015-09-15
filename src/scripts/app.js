'use strict';
/**
 * Created by rj on 9/10/15.
 */
var
  angular = require( 'angular' ),
  uiBootstrap = require( 'angular-ui-bootstrap' ),
  iysApp = require( './modules/iys.js' );

console.log( 'hello, %o', angular );
console.dir( iysApp );

setTimeout( function() {
  console.warn( 'hello people' ); //eslint-disable-line
}, 5000 );
