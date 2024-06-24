import {mobileVhFix} from './utils/mobile-vh-fix.js';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
// import {CustomSelect} from './modules/select/custom-select';
// import {uploadFile, uploadImageDrop} from './modules/input-file/init-upload';
import {initFormValidate} from './form/init-form-validate.js';
import './modules/advantages-swiper';
import {setHeroSwiper} from './modules/hero-swiper';
import {setAboutSwiper} from './modules/about-swiper';
import {setLicensesSwiper} from './modules/licenses-swiper';
import {setPartnersSwiper} from './modules/partners-swiper';
import {setEvents22Swiper} from './modules/events-swiper-22';
import {setEvents23Swiper} from './modules/events-swiper-23';

import {menuToggle} from './modules/menu-toggle.js';
import {servicesCardsRender} from './modules/services-cards-render';
import {productsCardsRender} from './modules/products-cards-render';
import {selectCards} from './modules/products-filter';
import {searching} from './modules/searching';
import {renderFilterMobile} from './modules/filter-toggle-mobile';
import {setLinkOpenModal} from './modules/about-link-partners';
import {setLicenseOpenModal} from './modules/about-license-modal';
import {setSubmenu} from './modules/submenu-toggle';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  // Utils
  // ---------------------------------

  mobileVhFix();

  // Modules
  // ---------------------------------

  menuToggle();
  setSubmenu();
  servicesCardsRender();
  productsCardsRender();
  selectCards();
  searching();
  renderFilterMobile();
  setLinkOpenModal();
  setLicenseOpenModal();
  initModals();
  initFormValidate();
  setHeroSwiper();
  setAboutSwiper();
  setLicensesSwiper();
  setPartnersSwiper();
  setEvents22Swiper();
  setEvents23Swiper();
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {

    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
