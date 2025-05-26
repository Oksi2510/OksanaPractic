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

  $(".testimonials__slider").slick({
    draggable: false,
    arrows: false,
    dots: true,
    appendDots: $(".testimonials__dots-wrapper"),
    dotsClass: "testimonials__slide-dots",
    customPaging: function (slider, i) {
      return '<button type="button"></button>'; // ← без текста, без цифр
    },
  });
  $(".testimonials__slide-prev").on("click", function (e) {
    e.preventDefault();
    $(".testimonials__slider").slick("slickPrev");
  });
  $(".testimonials__slide-next").on("click", function (e) {
    e.preventDefault();
    $(".testimonials__slider").slick("slickNext");
  });
  $(".program__acc__link").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("program__acc__link--active")) {
      $(this).removeClass("program__acc__link--active");
      $(this).children(".program__acc-text").slideUp();
    } else {
      $(".program__acc__link").removeClass("program__acc__link--active");
      $(".program__acc-text").slideUp();
      $(this).addClass("program__acc__link--active");
      $(this).children(".program__acc-text").slideDown();
    }
  });
});
