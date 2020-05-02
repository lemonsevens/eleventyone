  /*============= Home Slider With Carosel ==============*/

  if ($('.slide__carosel').length) {
    $('.slide__carosel').owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      autoplay: false,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      autoplayTimeout: 10000,
      items: 1,
      dots: false,
      lazyLoad: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
      }
    });
  }