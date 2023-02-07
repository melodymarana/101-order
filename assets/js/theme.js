$(document).ready(function () {
  highlightSlide();
  popularSlide();
  dealsSlide();
  weeklySlide();
  merchantProduct();
  productMenu();
  productBestSeller();
  backToTop();
  closeCollapse();
  productImageDetail();
  recommendMenu();
  promotionSlide();
});

function highlightSlide() {
  $('.highlight-slider').slick({
    autoplay: true,
    speed: 2000,
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1
  });
}

function popularSlide() {
  $('.popular-restaurants .item-popular-restaurants').slick({
    autoplay: false,
    arrows: false,
    speed: 600,
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: '50px',
    slidesToShow: 4,
    swipeToSlide: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: 'unslick'
      }
    ]
  });

  $(window).on('resize', function () {
    $('.popular-restaurants .item-popular-restaurants').slick('resize');
  });
}

function promotionSlide() {
  $('.item-promotions .item-promoitons-wrap').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 2000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          autoplay: true,
          speed: 2000,
          centerMode: true,
          centerPadding: '50px',
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true
        }
      }
    ]
  });

  $(window).on('resize', function () {
    $('.item-promotions .item-promoitons-wrap').slick('resize');
  });
}

function weeklySlide() {
  $('.weekly-slide').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 2000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          autoplay: true,
          speed: 1000,
          dots: false,
          centerMode: true,
          centerPadding: '50px',
          slidesToShow: 2,
          swipeToSlide: true,
        }
      }
    ]
  });

  $(window).on('resize', function () {
    $('.weekly-slide').slick('resize');
  });
}

function dealsSlide() {
  $('.item-deals-wrap').slick({
    autoplay: true,
    speed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: '50px',
    dots: false,
    infinite: true,
    slidesToShow: 1,
    swipeToSlide: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: 'unslick'
      }
    ]
  });

  $(window).on('resize', function () {
    $('.item-deals-wrap').slick('resize');
  });
}

function merchantProduct() {
  $('.merchant body').scrollspy({target: "#productNavbar", offset: 50});

  $(".navbar-product-menu .nav-link").on('click', function (event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    } // End if
  });
}

function productMenu() {
  $("#productNavbar .btn-prev").click(function () {
    var leftPos = $('#productNavbar').scrollLeft();
    $("#productNavbar").animate({scrollLeft: leftPos - 200}, 400);
  });

  $("#productNavbar .btn-next").click(function () {
    var leftPos = $('#productNavbar').scrollLeft();
    $("#productNavbar").animate({scrollLeft: leftPos + 200}, 400);
  });
}

function productBestSeller() {
  $('.product-best-seller').slick({
    autoplay: false,
    arrows: false,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    speed: 300,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: 'unslick'
      }
    ]
  });

  $(window).on('resize', function () {
    $('.product-best-seller').slick('resize');
  });
}

function recommendMenu() {
  $('.recommend-menu').slick({
    autoplay: true,
    speed: 600,
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 2,
          centerMode: true,
          centerPadding: '96px',
        }
      }
    ]
  });
}

function categoriesSlide() {
  $('#top-categories').slick({
    autoplay: false,
    arrows: false,
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    speed: 300,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: 'unslick'
      }
    ]
  });

  $(window).on('resize', function () {
    $('#top-categories').slick('resize');
  });
}

function productImageDetail() {
  $('.product-item-view').slick({
    slidesToShow: 1,
    arrows: false,
    fade: true,
    //swipe: false,
    asNavFor: '.product-item-thumbnail'
  });
  $('.product-item-thumbnail').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    asNavFor: '.product-item-view',
    dots: false,
    infinite: false,
    focusOnSelect: true,
  });
}

function backToTop() {
  var backToTop = $('#backToTop');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      backToTop.addClass('show');
    } else {
      backToTop.removeClass('show');
    }
  });
  backToTop.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, '300');
  });
}

function closeCollapse() {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })

  $('.widget-user-item').on('click', function () {
    $('.navbar-collapse').removeClass('open');
  });
}

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('.image-preview-profile').attr('src', e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
