const Swiper = global.Swiper;
const swiperContainer = document.querySelector('.about-swiper__swiper');

const swiperOptions = {
  navigation: {
    nextEl: '.about-swiper__btn--next',
    prevEl: '.about-swiper__btn--prev',
  },
  loop: true,
  slidesPerView: 1,
  speed: 600,
  spaceBetween: 50,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
};

export const setAboutSwiper = () => {
  if (swiperContainer) {
    // eslint-disable-next-line
    const aboutSwiper = new Swiper(swiperContainer, swiperOptions);
  }
};
