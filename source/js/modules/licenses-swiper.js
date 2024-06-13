const Swiper = global.Swiper;
// const breakpoint = window.matchMedia('(max-width:767px)');

const swiperOptions = {
  navigation: {
    nextEl: '.about-licenses__btn--next',
    prevEl: '.about-licenses__btn--prev',
  },
  pagination: {
    el: '.about-licenses__pagination',
    type: 'progressbar',
  },
  slidesPerView: 1,
  speed: 600,
  spaceBetween: 26,
  breakpoints: {
    768: {
      slidesPerView: 'auto',
    },
  },
};

export const aboutSwiper = new Swiper('.about-licenses__swiper', swiperOptions);
