el.addEventListener('click', function(e) {

  // Don't add URL with href="#" - Stop Hash(#)
  e.preventDefault ? e.preventDefault() : e.returnValue = false;
});