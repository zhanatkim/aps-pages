const Swiper = global.Swiper;


export const eventsThumbSwiper22 = new Swiper('.events-swiper22--thumb', {
  spaceBetween: 20,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  keyboard: true,
});

export const eventsSwiper22 = new Swiper('.events-swiper22--full', {
  spaceBetween: 10,
  keyboard: true,
  // navigation: {
  //   nextEl: '.events-swiper__btn--next',
  //   prevEl: '.events-swiper__btn--prev',
  // },
  thumbs: {
    swiper: eventsThumbSwiper22,
  },
});

