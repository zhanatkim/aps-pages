import {onToggleMenuRender} from './menu-toggle';
import {disablePageScroll, enablePageScroll} from '../vendor/scroll-lock.min';

const filterWrapper = document.querySelector('.products-filter__wrapper');
const filterToggle = document.querySelector('.header__filter-toggle');
const header = document.querySelector('.header');
const toggle = document.querySelector('.header__toggle');
const breakpoint = window.matchMedia('(max-width:767px)');
const submitBtn = document.querySelector('.products-filter__btn-submit');
// const onFilterToggleOpenFilter = () => {
//   filterWrapper.classList.toggle('is-active');
//   filterToggle.classList.toggle('is-active');
//   toggle.classList.toggle('is-active');
//   header.setAttribute('style', 'background-color:#fffefc;');
//   toggle.addEventListener('click', closeFilter);
//   toggle.removeEventListener('click', openMenu);
//   toggle.removeEventListener('click', closeMenu);
// };

const openFilter = () => {
  filterWrapper.classList.add('is-active');
  filterToggle.classList.add('is-active');
  toggle.classList.add('is-active');
  header.setAttribute('style', 'background-color:#fffefc;');
  toggle.addEventListener('click', closeFilter);
  toggle.removeEventListener('click', onToggleMenuRender);
  disablePageScroll(filterWrapper.querySelector('form'));
};

function closeFilter() {
  toggle.classList.remove('is-active');
  header.removeAttribute('style');
  filterWrapper.classList.remove('is-active');
  filterToggle.classList.remove('is-active');
  toggle.removeEventListener('click', closeFilter);
  toggle.addEventListener('click', onToggleMenuRender);
  enablePageScroll(filterWrapper.querySelector('form'));
}

const onFilterToggleOpenFilter = () => {
  return filterToggle.classList.contains('is-active') ? closeFilter() : openFilter();
};

export const renderFilterMobile = () => {
  if (filterWrapper && filterToggle && toggle && submitBtn) {
    if (breakpoint.matches) {
      filterToggle.addEventListener('click', onFilterToggleOpenFilter);
      submitBtn.addEventListener('click', closeFilter);
    }
  }
};
