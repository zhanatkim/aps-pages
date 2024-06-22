import {sliceCards, clearCardsList} from './cards-render';

const inputsContainer = document.querySelector('.products-filter__inner');
const cardsButton = document.querySelector('.products-catalog__button');
const cards = document.querySelectorAll('article[data-sort]');
const reset = document.querySelector('.products-filter__btn-reset');
const CARDS_DESK = 16;

// const breakpoint = window.matchMedia('(max-width:767px)');
let arr = [];

const onInputToggle = (evt) => {
  const input = evt.target.closest('input[name="product-sort"]');
  if (!input) {
    if (inputsContainer.contains(input)) {
      return;
    }
    return;
  }
  if (input.checked === true) {
    arr.push(input.value);
  } else {
    const index = arr.indexOf(input.value);
    arr.splice(index, 1);
  }
  let sortedCards = [];

  evt.preventDefault();
  cards.forEach((card) => {
    if (!card.classList.contains('is-hidden')) {
      card.classList.add('is-hidden');
    }
    arr.forEach((el) => {
      if (el === card.dataset.sort) {
        sortedCards.push(card);
        console.log(sortedCards);
      }
    });
  });
  if (sortedCards.length < 1) {
    sortedCards = cards;
    sortedCards.forEach((sortedCard) => {
      sortedCard.classList.remove('is-hidden');
    });
  }
  sliceCards(sortedCards, cardsButton, CARDS_DESK);
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
