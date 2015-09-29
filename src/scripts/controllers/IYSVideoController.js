'use strict';

// Exports controller function with dep injection array
module.exports = [
  '$scope',
  '$sce',
  'IYSStateService',
  'IYSStoryService',
  function( $scope, $sce, iysState, storyService ) {
    var self = this;

    // videogular config
    //    http://www.videogular.com/tutorials/how-to-start/
    /*
    {
      sources: [
        {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"},
        {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
        {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
      ],
      tracks: [
        {
          src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
          kind: "subtitles",
          srclang: "en",
          label: "English",
          default: ""
        }
      ]
    }
   */

    self.config = {
//      theme: '../node_modules/videogular/dist/themes/default/latest/videogular.css',
    };


    $scope.$on( 'IYSStoryChanged', function( event, story ) {
      console.log( 'saw story change in video ctrlr: %o, %o', event, story );
      self.storySource = [
        {
          // 'http://s3.amazonaws.com/nmajh-live/data/iys/videos/2/15822_640_360_25_544k.mp4'
          src: $sce.trustAsResourceUrl( iysState.state.active.story.path ),
          type: 'video/mp4'
        }
      ];
    });
  }
];
