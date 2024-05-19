const Swiper = global.Swiper;
// const breakpoint = window.matchMedia('(max-width:767px)');

const swiperOptions = {
  navigation: {
    nextEl: '.advantages__swiper-button--next',
    prevEl: '.advantages__swiper-button--prev',
  },
  centeredSlides: false,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 12,
  breakpoints: {
    768: {
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
  },
};

export const advantagesSwiper = new Swiper('.advantages__swiper', swiperOptions);
