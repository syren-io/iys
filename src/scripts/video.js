'use strict';

var videojs = require( 'video.js' ),
  player = null;


videojs( 'main-video', {}, function() {
  player = this;
});


// exports
module.exports = {
  player: player
};
