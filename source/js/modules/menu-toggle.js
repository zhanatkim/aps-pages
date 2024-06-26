import {disablePageScroll, enablePageScroll} from '../vendor/scroll-lock.min';
// import {initTabs} from './tabs/init-tabs';

const toggle = document.querySelector('.header__toggle');

const header = document.querySelector('.header');

const breakpoint = window.matchMedia('(max-width:767px)');

const nav = document.querySelector('.drop-menu');
// const dropMenu = document.querySelector('.main-nav__submenu');

const serviceTab = document.querySelectorAll('.main-nav__item > .main-nav__link')[0];

function closeMenu() {
  nav.classList.remove('is-active');
  toggle.classList.remove('is-active');
  header.removeAttribute('style');
  enablePageScroll(nav);
}

const openMenu = () => {
  if (!toggle) {
    return;
  }
  if (!breakpoint.matches) {
    return;
  }
  serviceTab.setAttribute('href', '#');
  // serviceTab.dataset.tabs = 'control';
  nav.classList.add('is-active');
  toggle.classList.add('is-active');
  header.setAttribute('style', 'background-color:#fffefc;');
  disablePageScroll(nav);
  // initTabs();
};

export const onToggleMenuRender = () => {
  return nav.classList.contains('is-active') ? closeMenu() : openMenu();
};

export const menuToggle = () => {
  if (nav && toggle && serviceTab && header) {
    if (breakpoint.matches) {
      toggle.addEventListener('click', onToggleMenuRender);
    } else {
      toggle.removeEventListener('click', onToggleMenuRender);
    }
    breakpoint.addEventListener('change', () => {
      if (!breakpoint.matches) {
        closeMenu();
      }
    });
  }
};
