'use strict';
/**
 * Created by rj on 9/10/15.
 */
var angular = require( 'angular' );

console.log( 'hello, %o', angular );

setTimeout( function() {
  alert( 'hello world' ); //eslint-disable-line
}, 5000 );
