const Swiper = global.Swiper;
// const breakpoint = window.matchMedia('(max-width:767px)');

const swiperOptions = {
  navigation: {
    nextEl: '.about-partners__btn--next',
    prevEl: '.about-partners__btn--prev',
  },
  pagination: {
    el: '.about-partners__pagination',
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

export const aboutSwiper = new Swiper('.about-partners__swiper', swiperOptions);
