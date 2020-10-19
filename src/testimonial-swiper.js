let swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    simulateTouch: false,
    breakpoints: {
      550: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      930: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
    loop: true,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: '.swiper-pagination',
      centeredSlides: true,
      clickable: true,
    },
  });