'use strict';

var
  // the videojs object is installed globally via free CDN
  videojs = window.videojs || function() {}, //require( 'video.js' ),
  player = null;

// options are set in index.html
videojs( 'main-video', {}, function() {
  player = this; //eslint-disable-line
});

// exports
module.exports = {
  player: player
};
