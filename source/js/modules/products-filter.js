import {sliceCards, clearCardsList} from './cards-render';

const inputsContainer = document.querySelector('.products-filter__inner');
const cardsButton = document.querySelector('.products-catalog__button');
const cards = document.querySelectorAll('article[data-sort]');
const reset = document.querySelector('.products-filter__btn-reset');
const CARDS_DESK = 16;

// const breakpoint = window.matchMedia('(max-width:767px)');
let arr = [];
let sortedCards = [];
const onInputToggle = (evt) => {
  const input = evt.target.closest('input[name="product-sort"]');
  if (!input) {
    if (inputsContainer.contains(input)) {
      return;
    }
    return;
  }

  arr.push(input.value);

  evt.preventDefault();
  cards.forEach((card) => {
    if (!card.classList.contains('is-hidden')) {
      card.classList.add('is-hidden');
    }
    arr.forEach((el) => {
      if (el === card.dataset.sort) {
        // card.classList.remove('is-hidden');
        sortedCards.push(card);
        sliceCards(sortedCards, cardsButton, CARDS_DESK);
      }
    });
  });
};

const clearTogglesList = () => {
  arr = [];
  clearCardsList(cardsButton);
  sliceCards(cards, cardsButton, CARDS_DESK);
};


export const selectCards = () => {
  if (inputsContainer && cards && reset && cardsButton) {
    inputsContainer.addEventListener('change', onInputToggle);
    reset.addEventListener('click', clearTogglesList);
  }
};
