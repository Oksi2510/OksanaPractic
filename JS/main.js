$(function () {
  Fancybox.bind("[data-fancybox]", {
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
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
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
  $(".burger").on("click", function (e) {
    e.preventDefault();
    if ($(".header__top").hasClass("header__top--open")) {
      $(".header__top").removeClass("header__top--open");
    } else {
      $(".header__top").addClass("header__top--open");
    }


    if ($(".header__top").hasClass("header__top--open")) {
      $(".overlay").addClass("overlay--show");
    } else {
      $(".overlay").removeClass("overlay--show");
    }

    if ($(".header__top").hasClass("header__top--open")) {
      $(".burger").addClass("burger--open");
    } else {
      $(".burger").removeClass("burger--open");
    }
    $(".header__top").on("click", "a", function () {
      $(".header__top").removeClass("header__top--open");
      $(".overlay").removeClass("overlay--show");
    });

    $(".overlay--show").on("click", function () {
      $(".header__top").removeClass("header__top--open");
      $(".overlay").removeClass("overlay--show");
    });

  });
});
