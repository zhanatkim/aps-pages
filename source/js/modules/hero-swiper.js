const Swiper = global.Swiper;
const swiperContainer = document.querySelector('.hero__swiper');


const swiperOptions = {
  pagination: {
    el: '.hero__pagination',
    clickable: true,
  },
  lazy: true,
  slidesPerView: 1,
  speed: 1500,
  loop: true,
  autoplay: {
    delay: 3000,
    paused: true,
    timeLeft: 4000,
  },
};


export const setHeroSwiper = () => {
  if (swiperContainer) {
    // eslint-disable-next-line
    const heroSwiper = new Swiper(swiperContainer, swiperOptions);
  }
};


