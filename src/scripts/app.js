'use strict';
/**
 * Created by rj on 9/10/15.
 */
var angular = require( 'angular' );

console.log( 'hello, %o', angular );

setTimeout( function() {
  console.warn( 'hello people' ); //eslint-disable-line
}, 5000 );
