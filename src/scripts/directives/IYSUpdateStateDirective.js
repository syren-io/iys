'use strict';

module.exports = [ '$animate', 'IYSStateService', function( $animate, iysState ) {
  // A helper function for updating the state (question or story)
  // if it doesn't recognize the input it will fail silently
  var updateState = function( stateProperty, newData ) {
    var updateFnName;

    if ( stateProperty === 'question' ) {
      updateFnName = 'selectQuestion';
    } else if ( stateProperty === 'story' ) {
      updateFnName = 'selectStory';
    } else {
      return;
    }

    iysState[ updateFnName ]( newData );
  };

  // Directive definition
  return {
    restrict: 'A',
    require: 'carousel',
    link: function( scope, element, attrs, carouselCtrl ) {
      var
        // toUpdate represents the string passed in as the value of the iys-state-update directive
        toUpdate = attrs.iysUpdateState,
        originalSelect = carouselCtrl.select;

      // watch for changes to state prop
      attrs.$observe( 'iysUpdateState', function( newValue ) {
        toUpdate = newValue;
      });

      /*
      console.dir({
        scope: scope,
        element: element,
        attrs: attrs,
        carousel: carouselCtrl
      });
      */

      // rewrite carousel "select" function that changes the slides
      carouselCtrl.select = function( nextSlide, direction ) {
        if ( nextSlide !== carouselCtrl.currentSlide ) {
          $animate.on( 'addClass', nextSlide.$element, function( elem, phase ) {
            if ( phase === 'close' ) {
              if ( nextSlide.$parent[ toUpdate ] != null ) {
                updateState( toUpdate, nextSlide.$parent[ toUpdate ]);
                console.log( 'updating' );
                console.dir( nextSlide.$parent[ toUpdate ]);
              }

              $animate.off( 'addClass', elem );
            }
          });
        }

        return originalSelect.apply( carouselCtrl, arguments );
      };

    }
  };
}];
