'use strict';

// Exports controller function with dep injection array
module.exports = [
  '$scope',
  '$sce',
  'IYSStateService',
  'IYSStoryService',
  function( $scope, $sce, iysState, storyService ) {
    // videogular config
    //    http://www.videogular.com/tutorials/how-to-start/

    /*
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

     */

    $scope.config = {
//      theme: '../node_modules/videogular/dist/themes/default/latest/videogular.css',
      plugins: {
        poster: 'http://www.videogular.com/assets/images/videogular.png'
      }
    };

    $scope.currentSource = [
      {
        src: $sce.trustAsResourceUrl( iysState.getActiveStory().path ),
        type: 'video/mp4'
      }
    ];

    $scope.$on( 'storyChanged', function( event ) {
      console.log( 'hi event: %o', event );
      console.dir( iysState.getActiveStory());
    });
  }
];
