const Swiper = global.Swiper;
const swiperContainer = document.querySelector('.about-licenses__swiper');

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

export const setLicensesSwiper = () => {
  if (swiperContainer) {
    // eslint-disable-next-line
    const licensesSwiper = new Swiper(swiperContainer, swiperOptions);
  }
};
