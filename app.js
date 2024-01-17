'use strict';

document.getElementsByClassName('button').onclick = function() { 
  var x = document.getElementsByClassName('content2');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    } 
} 