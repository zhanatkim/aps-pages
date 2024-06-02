import {sliceCards, clearCardsList} from './cards-render';

const CARDS_DESK = 4;
const CARDS_MOBILE = 2;

const cardsList = document.querySelectorAll('.services-card');
const cardsButton = document.querySelector('.services-catalog__button');

const breakpoint = window.matchMedia('(max-width:767px)');

const cardsRender = () => {
  return breakpoint.matches ? sliceCards(cardsList, cardsButton, CARDS_DESK) : sliceCards(cardsList, cardsButton, CARDS_MOBILE);
};

const breakpointChecker = () => {
  if (!breakpoint.matches) {
    clearCardsList();
    sliceCards(cardsList, cardsButton, CARDS_DESK);
    return;
  }
  clearCardsList();
  sliceCards(cardsList, cardsButton, CARDS_MOBILE);
};

export const servicesCardsRender = () => {
  if (cardsList && cardsButton) {
    cardsButton.addEventListener('click', cardsRender);
    breakpoint.addEventListener('change', breakpointChecker);
    breakpointChecker();
  }
};
