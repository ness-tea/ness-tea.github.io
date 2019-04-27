$(document).ready(function(){
  $('.project-arr').slick({
    centerMode: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 100,
        settings: {
          dots: true,
          arrows: true,
          centerMode: true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          arrows: true,
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  });
});
