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

  //слайдер отзывов
  if($('.js-reviews').length) {
    $('.js-reviews').slick({
      mobileFirst: true,
      infinite: true,
      slidesToShow: 1,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 1180,
          settings: {
            centerMode: true,
            variableWidth: true
          }
        }
      ]
    });
  }

  //слайдер деталки
  if($('.js-detail-slider').length) {
    $('.js-detail-slider').slick({
      mobileFirst: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      dots: true,
      asNavFor: '.js-detail-thumbs',
      responsive: [
        {
         breakpoint: 1180,
         settings: {
           dots: false
         }
       }
      ]
   });

   $('.js-detail-thumbs').slick({
     mobileFirst: true,
     slidesToShow: 3,
     slidesToScroll: 1,
     asNavFor: '.js-detail-slider',
     arrows: false,
     dots: false,
     centerMode: true,
     centerPadding: '0',
     focusOnSelect: true,
     responsive: [
       {
        breakpoint: 1180,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
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

//открытие поиска
$(document).on('click', '.js-search-opener', function () {
  $('body').addClass('is-overflow');
  $('.search-block').addClass('is-open');
  return false;
});

//закрытие поиска
$(document).on('click', '.js-search-closer', function () {
  $('body').removeClass('is-overflow');
  $('.search-block').removeClass('is-open');
  return false;
});

//тогглер аккордеона
$(document).on('click', '.js-accordion-toggler', function () {
  var _this = $(this);
  if($(this).hasClass('is-active')) {
    _this.closest('.accordion').find('.accordion__body').slideUp();
    _this.removeClass('is-active');
  }else{
    _this.closest('.accordion').find('.accordion__body').slideDown();
    _this.addClass('is-active');
  }
  return false;
});

//открытие фильтра
$(document).on('click', '.js-filter-opener', function () {
  $('body').addClass('is-overflow');
  $('.filter').addClass('is-open');
  return false;
});

//закрытие фильтра
$(document).on('click', '.js-filter-closer', function () {
  $('body').removeClass('is-overflow');
  $('.filter').removeClass('is-open');
  return false;
});

//тогглер секции фильтра
$(document).on('click', '.js-filter-section-toggler', function () {
  if(!$(this).closest('.filter__section').find('.filter__section-inner').hasClass('is-open')) {
    $(this).closest('.filter__section').find('.filter__section-inner').addClass('is-open');
    $(this).addClass('is-active');
    $(this).closest('.filter__section').find('.filter__section-inner').slideToggle();
  }else {
    $(this).removeClass('is-active');
    $(this).closest('.filter__section').find('.filter__section-inner').slideToggle(function () {
      $(this).closest('.filter__section').find('.filter__section-inner').removeClass('is-open');
    });
  }
  return false;
});

//тогглер списка в секции фильтра
$(document).on('click', '.js-filter-list-toggler', function () {
  var old_text = $(this).text();
  if(!$(this).hasClass('is-active')) {
    $(this).closest('.filter__section').find('.filter__list').addClass('is-open');
    $(this).addClass('is-active');
    $(this).text($(this).attr('data-text'));
    $(this).attr('data-text', old_text);
  }else {
    $(this).removeClass('is-active');
    $(this).closest('.filter__section').find('.filter__list').removeClass('is-open');
    $(this).text($(this).attr('data-text'));
    $(this).attr('data-text', old_text);
  }
  return false;
});
