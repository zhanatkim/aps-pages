const Swiper = global.Swiper;
const swiperContainer = document.querySelector('.about-partners__swiper');

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

export const setPartnersSwiper = () => {
  if (swiperContainer) {
    // eslint-disable-next-line
    const partnersSwiper = new Swiper(swiperContainer, swiperOptions);
  }
};
