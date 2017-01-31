var scrollAnimatedHeader = (function() {

  var docElem = document.documentElement;
  var header = document.querySelector('.header');
  var didScroll = false;
  var changeHeaderOn = 300;

  function init() {
    window.addEventListener( 'scroll', function( event ) {
      if( !didScroll ) {
        didScroll = true;
        setTimeout( scrollPage, 250 );
      }
    }, false );
  }

  function scrollPage() {
    var sy = scrollY();
    if ( sy >= changeHeaderOn ) {
      header.classList.add('header--shrink' );
    }
    else {
      header.classList.remove('header--shrink' );
    }
    didScroll = false;
  }

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }

  if (!header) {
    return;
  }

  init();

})();