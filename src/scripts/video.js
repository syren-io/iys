'use strict';

var
  videojs = window.videojs, //require( 'video.js' ),
  player = null;

// options are set in index.html
videojs( 'main-video', {}, function() {
  player = this;
});

// exports
module.exports = {
  player: player
};
