const Swiper = global.Swiper;
// const breakpoint = window.matchMedia('(max-width:767px)');

const swiperOptions = {
  navigation: {
    nextEl: '.about-swiper__btn--next',
    prevEl: '.about-swiper__btn--prev',
  },
  loop: true,
  // centeredSlides: true,
  slidesPerView: 1,
  speed: 600,
  spaceBetween: 50,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
};

export const aboutSwiper = new Swiper('.about-swiper__swiper', swiperOptions);
