const Swiper = global.Swiper;
// const breakpoint = window.matchMedia('(max-width:767px)');

const swiperOptions = {
  pagination: {
    el: '.hero__pagination',
    clickable: true,
  },
  // navigation: {
  //   nextEl: '.hero__control--next',
  //   prevEl: '.hero__control--prev',
  // },
  slidesPerView: 1,
  speed: 1000,
  // effect: 'fade',
  // parallax: true,
  // cssmode: true,
  loop: true,
  // autoplay: {
  //   delay: 3000,
  //   paused: true,
  //   timeLeft: 4000,
  // },
};

export const heroSwiper = new Swiper('.hero__swiper', swiperOptions);


