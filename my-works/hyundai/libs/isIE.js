;(function ieDetector () {
  var isIE = 0;
  function getIEVersion() {
    var _userAgent = window.navigator.userAgent,
        idx        = _userAgent.indexOf("MSIE");

    if (idx > 0) {
      return parseInt(_userAgent.substring(idx+ 5, _userAgent.indexOf(".", idx)));
    } else if (!!navigator.userAgent.match(/Trident\/7\./)) {
      return 11;// If IE 11
    } else {
      return 0;//It is not IE
    }
  };

  isIE = getIEVersion();

  if ( isIE ) {
    $('html').addClass('ie');
  }

})();
