$(document).ready(function () {
  $(".testimonial-img-slick").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    asNavFor: ".testimonial-cntn-slider",
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $(".prev-btn"),
    nextArrow: $(".next-btn"),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".testimonial-cntn-slider").slick({
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    centerMode: true,
    infinite:true,
  });
});