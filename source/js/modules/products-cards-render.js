import {sliceCards, clearCardsList} from './cards-render';

const CARDS_DESK = 16;

const CARDS_MOBILE = 10;

const cardsList = document.querySelectorAll('.product-card');
const cardsButton = document.querySelector('.products-catalog__button');

const breakpoint = window.matchMedia('(max-width:1023px)');

const productscardsRender = () => {
  return breakpoint.matches ? sliceCards(cardsList, cardsButton, CARDS_DESK) : sliceCards(cardsList, cardsButton, CARDS_MOBILE);
};

const breakpointChecker = () => {
  if (!breakpoint.matches) {
    clearCardsList(cardsButton);
    sliceCards(cardsList, cardsButton, CARDS_DESK);
    return;
  }
  clearCardsList(cardsButton);
  sliceCards(cardsList, cardsButton, CARDS_MOBILE);
};

export const productsCardsRender = () => {
  if (cardsList && cardsButton) {
    cardsButton.addEventListener('click', productscardsRender);
    breakpoint.addEventListener('change', breakpointChecker);
    breakpointChecker();
  }
};
