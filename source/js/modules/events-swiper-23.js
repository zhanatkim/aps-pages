const Swiper = global.Swiper;
const swiperContainer1 = document.querySelector('.events-swiper23--thumb');
const swiperContainer2 = document.querySelector('.events-swiper23--full');

export const setEvents23Swiper = () => {
  if (swiperContainer1 && swiperContainer2) {
    // eslint-disable-next-line
    const eventsThumbSwiper23 = new Swiper(swiperContainer1, {
      spaceBetween: 20,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      keyboard: true,
    });
    // eslint-disable-next-line
    const eventsSwiper23 = new Swiper(swiperContainer2, {
      spaceBetween: 10,
      keyboard: true,
      thumbs: {
        swiper: eventsThumbSwiper23,
      },
    });
  }
};

