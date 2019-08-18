$(document).ready(function() {
        // Transition effect for navbar 
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 500) { 
              $('.clear').addClass('solid');
          } else {
              $('.clear').removeClass('solid');
          }
        });
});

