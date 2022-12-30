'use strict';

$(function () {

  // СКРОЛЛ ПО ЯКОРЯМ
  $(document).ready(function () {
    $(".nav").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({ scrollTop: (top - 120) }, 1000);
    });
  });


  // HEADER SCROLL
  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      $('.header').addClass('scroll');
    } else {
      $('.header').removeClass('scroll');
    }
  });
  $(document).ready(function () {
    if ($(this).scrollTop() > 150) {
      $('.header').addClass('scroll');
    } else {
      $('.header').removeClass('scroll');
    }
  });

  // табы
  $('.js-open-tab').on('click', function () {
    var categoryID = $(this).attr('id');
    var categoryProdList = $('.tab__content[data-id="' + categoryID + '"]');

    $('.tab__content').removeClass('active');
    $(categoryProdList).addClass('active');

    $('.tab__name').removeClass('active');
    $(this).addClass('active');
  });

  // ОТКРЫТЬ/ЗАКРЫТЬ МЕНЮ
  $('.js-open-menu').on('click', function () {
    $('.menu').addClass('open');
    $('.fade-area').addClass("active");
    $('body').addClass('fixedPosition');
  });
  $('.js-close-menu').on('click', function () {
    $('.menu').removeClass('open');
    $('.fade-area').removeClass("active");
    $('body').removeClass('fixedPosition');
  });
  $('.js-menu-link').on('click', function () {
    $('.menu').removeClass('open');
    $('.fade-area').removeClass("active");
    $('body').removeClass('fixedPosition');
  });
  $('.fade-area').on("click", function (e) {
    $('.fade-area').removeClass("active");
    $('.menu').removeClass('open');
    $('body').removeClass('fixedPosition');
  });


});


new Swiper(".slider-three", {
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
  grabCursor: true,
  breakpoints: {
    690: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 26
    }
  },
  navigation: {
    nextEl: ".slider-three__next",
    prevEl: ".slider-three__prev"
  }
});

document.querySelectorAll('.accordion').forEach((item, index) => {
  item.id = 'accordion' + (index + 1);
  new ItcAccordion('#' + item.id, {
    alwaysOpen: false
  });
});


// АНИМАЦИИ
new WOW().init();