(function ($)
  { "use strict";



  
  
/*  WOW active */
new WOW().init();

	// Scrollax
  $.Scrollax();



  // Carousel
      var siteCarousel = function () {

        $('.slide-one-item').owlCarousel({
          center: false,
          items: 1,
          loop: true,
          stagePadding: 0,
          margin: 0,
          smartSpeed: 1000,
          autoplay: true,
          pauseOnHover: false,
          autoHeight: true,
          nav: false,
          navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
        });
    
        
      };
      siteCarousel();

      $('body').scrollspy({target:'#nav-scroll'});
      $('#nav-scroll a').on('click', function(e){
       if(this.hash !== ''){
         e.preventDefault();

       const hash= this.hash;

       $('html,body').animate({
         scrollTop: $(hash).offset().top
       }, 900, function(){
        window.location.hash= hash;
      });
      }
    });



})(jQuery);
