$(function () {
  // first slider
  $(".header-slider").slick({
    dots: true,
    // vertical: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="./images/prev.svg" alt="arrow-prev"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="./images/next.svg" alt="arrow-next"></button>',
  });
  // second slides
  $(".product__name").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: ".product__content",

    // make slide vertical
    vertical: true,
    prevArrow:
      '<button type="button" class="product_prev"><img src="./images/product_prev.png" alt="arrow-prev"></button>',
    nextArrow:
      '<button type="button" class="product_next"><img src="./images/product_next.png" alt="arrow-next"></button>',
  });
  $(".product__content").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".product__name",
    fade: true,
    arrows: false,
  });
});
