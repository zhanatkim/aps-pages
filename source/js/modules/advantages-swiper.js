const Swiper = global.Swiper;
// const breakpoint = window.matchMedia('(max-width:767px)');

const swiperOptions = {
  navigation: {
    nextEl: '.advantages__swiper-button--next',
    prevEl: '.advantages__swiper-button--prev',
  },
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  speed: 600,
  spaceBetween: 20,
  breakpoints: {
    768: {
      spaceBetween: 26,
    },
    1024: {
      spaceBetween: 40,
    },
  },
};

export const advantagesSwiper = new Swiper('.advantages__swiper', swiperOptions);
