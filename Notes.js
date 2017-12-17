/**
 * JAVASCRIPT NOTES
 */

// STOP HASH(#) RETURN
el.addEventListener('click', function(e) {
  // Don't add URL with href="#" - Stop Hash(#)
  e.preventDefault ? e.preventDefault() : e.returnValue = false;
});



// Lay vi tri cua ScrollTop window
var scrolltop = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
