$(document).ready(function(){
    
        if('active' != false){
            $('ul').removeClass('active');
        }
        
         $('.toggle').click(function(){
                $('ul').toggleClass('active');
              
         })
    })
    
    
    $(document).ready(function(){
           $('.section-slider-item').slick({
                dots: false,          
                infinite: true,
                speed: 1000,
                fade: true,
                cssEase: 'linear',
                autoplay:true,
                autoplaySpeed: 500,
           });
      });

      AOS.init();
 

      /*********|on click scroll|************/
$('.right-bar li').on('click', 'a[href^="#"]', function(e) {
  
     // target element id
     var id = $(this).attr('href');
   
     // target element
     var $id = $(id);
     if ($id.length === 0) {
         return;
     }
   
     // prevent standard hash navigation (avoid blinking in IE)
     e.preventDefault();
     
     // top position relative to the document
     var pos = $id.offset().top;
     // animated top scrolling
      $('body, html').animate({scrollTop: pos}, 1500);
 });
 
 $(document).ready(
     function() {
       var bh = $('.right-bar').height();
                $('.holder').height(bh - 20);
     });
 
 $(window).scroll(function() {
   
 
           var scrollpos = $(window).scrollTop();
           // Assign active class to nav links while scolling
           $('.holder').each(function(i) {
                     if ($(this).position().top <= scrollpos + 60) {
                               $('.right-bar li a.act').removeClass('act');
                               $('.right-bar li a').eq(i).addClass('act');
           
 //console.log(scrollpos);
           var viewportheight = $('.right-bar').height();
           var licount = $(".right-bar li").length;
     $('.right-bar').animate({scrollTop: scrollpos / licount}, 0);
           
                     }
       
       
           });
 
 }).scroll();
 
