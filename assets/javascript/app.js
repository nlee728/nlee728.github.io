$(document).ready(function(){

   // Add smooth scrolling to all links in navbar and footer link
   $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Smooth page scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash to URL when done scrolling
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 300) {
          $(this).addClass("slide");
        }
    });
  });
})