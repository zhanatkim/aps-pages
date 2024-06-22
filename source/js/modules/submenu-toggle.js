
const breakpoint = window.matchMedia('(max-width:767px)');

const serviceTab = document.querySelectorAll('.main-nav__item > .main-nav__link')[0];

const submenu = document.querySelector('.main-nav__submenu');


const openSubmenu = (evt) => {
  if (!submenu.classList.contains('is-active')) {
    evt.preventDefault();
    submenu.classList.add('is-active');
  }
};

const closeSubmenu = () => {
  submenu.classList.remove('is-active');
};

const onTabOpenSubmenu = (evt) => {
  return (!submenu.classList.contains('is-active')) ? openSubmenu(evt) : closeSubmenu();
};

export const setSubmenu = () => {
  if (submenu && serviceTab) {
    if (breakpoint.matches) {
      serviceTab.addEventListener('click', onTabOpenSubmenu);
    } else {
      serviceTab.removeEventListener('click', onTabOpenSubmenu);
    }
  }
};
