
//makes navbar darker as scroll down
$(function() {
    var header = $(".navbar-default");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 30) {
            header.removeClass('navbar-default3').addClass("navbar-top-remove");
        } else {
            header.removeClass("navbar-top-remove").addClass('navbar-default1');
        }
    });
});

if ( $(window).width() <= 441) { 
  $(document).ready(function(){
  $('.slider1').bxSlider({
    slideWidth: 1140,
    minSlides: 1,
    maxSlides: 1,
    slideMargin: 10
  });
});

}
else if($(window).width() > 441 && $(window).width() < 768){
	 $(document).ready(function(){
  $('.slider1').bxSlider({
    slideWidth: 1140,
    minSlides: 2,
    maxSlides: 2,
    slideMargin: 10
  });
});
}
else{
	  $(document).ready(function(){
  $('.slider1').bxSlider({
    slideWidth: 1140,
    minSlides: 3,
    maxSlides: 3,
    slideMargin: 10
  });
});
}
