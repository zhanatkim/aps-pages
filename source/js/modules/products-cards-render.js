import {sliceCards, clearCardsList} from './cards-render';

const CARDS_DESK = 8;
const CARDS_MOBILE = 6;

const cardsList = document.querySelectorAll('.product-card');
const cardsButton = document.querySelector('.products-catalog__button');

const breakpoint = window.matchMedia('(max-width:767px)');

const productscardsRender = () => {
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

export const productsCardsRender = () => {
  if (cardsList && cardsButton) {
    cardsButton.addEventListener('click', productscardsRender);
    breakpoint.addEventListener('change', breakpointChecker);
    breakpointChecker();
  }
};
