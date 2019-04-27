$(document).ready(function(){
  $('.project-arr').slick({
    centerMode: true,
    responsive: [
      {
        breakpoint: 100,
        settings: {
          dots: true,
          arrows: true,
          centerMode: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          arrows: true,
          centerMode: true,
        }
      }
    ]
  });
});
