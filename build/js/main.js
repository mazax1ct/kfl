$(document).ready(function() {
  //слайдер брендов
  if($('.js-brands').length) {
    $('.js-brands').slick({
      mobileFirst: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg aria-hidden="true"><use xlink:href="images/sprite.svg#arrow_left"/></svg></button>',
      nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg aria-hidden="true"><use xlink:href="images/sprite.svg#arrow_right"/></svg></button>',
      responsive: [
        {
          breakpoint: 1180,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5
          }
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6
          }
        }
      ]
    });
  }
});

//открытие главного меню на мобиле
$(document).on('click', '.js-main-menu-opener', function () {
  $('body').addClass('is-overflow');
  $('.main-menu').addClass('is-open');
  return false;
});

//закрытие главного меню на мобиле
$(document).on('click', '.js-main-menu-closer', function () {
  $('body').removeClass('is-overflow');
  $('.main-menu').removeClass('is-open');
  return false;
});

//тогглер аккордеона
$(document).on('click', '.js-accordion-toggler', function () {
  var _this = $(this);
  if($(this).hasClass('is-active')) {
    _this.closest('.accordion').find('.accordion__body').slideUp();
    _this.find('use').attr('xlink:href', 'images/sprite.svg#plus');
    _this.removeClass('is-active');
  }else{
    _this.closest('.accordion').find('.accordion__body').slideDown();
    _this.find('use').attr('xlink:href', 'images/sprite.svg#minus');
    _this.addClass('is-active');
  }
  return false;
});
