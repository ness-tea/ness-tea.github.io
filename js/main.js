$(document).ready(function(){
  $('.project-arr').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });

  $('.art-arr').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1700
  });
});
