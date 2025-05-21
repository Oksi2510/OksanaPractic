$(function () {
  Fancybox.bind("[data-fancybox]", {
    // опции
  });

  var mixer = mixitup(".directions__list");

  $(".direction__filter-btn").on("click", function () {
    $(".direction__filter-btn").removeClass("direction__filter-btn--active");
    $(this).addClass("direction__filter-btn--active");
  });

  $(".team__slider").slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    speed: 300,
    draggable: false,
  });
  $(".team__slide-prev").on("click", function (e) {
    e.preventDefault();
    $(".team__slider").slick("slickPrev");
  });

  $(".team__slide-next").on("click", function (e) {
    e.preventDefault();
    $(".team__slider").slick("slickNext");
  });


  
});
