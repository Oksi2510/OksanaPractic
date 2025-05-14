$(function() {
  Fancybox.bind("[data-fancybox]", {
    // опции
  });

  var mixer = mixitup('.directions__list');

  $('.direction__filter-btn').on('click', function () {
    $('.direction__filter-btn').removeClass('direction__filter-btn--active');
    $(this).addClass('direction__filter-btn--active');
  });
});