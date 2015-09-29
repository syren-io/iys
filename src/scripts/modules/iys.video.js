'use strict';

var
  angular = require( 'angular' ),
  ngSanitize = require( 'angular-sanitize' ),
  /*eslint-disable*/
  dummyLoad = [
    require( 'videogular/dist/videogular/latest/videogular' ),
    require( 'videogular/dist/controls/latest/vg-controls.js' ),
    require( 'videogular/dist/poster/latest/vg-poster.js' )
  ],
  /*eslint-enable*/
  deps = [
    ngSanitize,
    // videogular doesn't follow angular browserify pattern, have to manually add module names
    'com.2fdevs.videogular',
    'com.2fdevs.videogular.plugins.controls',
    'com.2fdevs.videogular.plugins.poster'
  ],
  iysVideo;

iysVideo = angular.module( 'iys.video', deps );

iysVideo.controller( 'IYSVideoController', require( '../controllers/IYSVideoController' ));

// exports
module.exports = iysVideo;
