import {productsCardsRender} from './products-cards-render';
const searchForm = document.querySelector('.search form');
const input = document.querySelector('#search');
const resetBtn = document.querySelector('.search__reset');
const searchBtn = document.querySelector('.search__submit');
const errorMsg = document.querySelector('.search__error');
const cards = document.querySelectorAll('.product-card');

const renderError = () => {
  if (errorMsg) {
    if (errorMsg.classList.contains('is-active')) {
      errorMsg.classList.remove('is-active');
    } else {
      errorMsg.classList.add('is-active');
    }
  }
};

const toggleBtns = () => {
  if (resetBtn.classList.contains('is-active')) {
    input.value = '';
    resetBtn.classList.remove('is-active');
    searchBtn.classList.remove('is-hidden');
    resetBtn.removeEventListener('click', resetAll);
  } else {
    resetBtn.classList.add('is-active');
    searchBtn.classList.add('is-hidden');
    resetBtn.addEventListener('click', resetAll);
  }
};

const resetAll = () => {
  if (errorMsg.classList.contains('is-active')) {
    errorMsg.classList.remove('is-active');
  }

  if (resetBtn.classList.contains('is-active')) {
    resetBtn.classList.remove('is-active');
  }

  if (searchBtn.classList.contains('is-hidden')) {
    searchBtn.classList.remove('is-hidden');
  }

  cards.forEach((card) => {
    card.classList.remove('is-hidden');
    card.classList.remove('is-filtered');
    card.classList.remove('is-searched');
  });
  productsCardsRender();
};

const searchTitle = (value) => {
  if (cards) {
    cards.forEach((card) => {
      const titleText = card.querySelector('.product-card__title').innerText.toLowerCase();
      if (titleText.includes(value)) {
        card.classList.remove('is-hidden');
        card.classList.add('is-searched');
      }
    });
  }
};

const searchText = (value) => {
  if (cards) {
    cards.forEach((card) => {
      const text = card.querySelector('.product-card__group').innerText.toLowerCase();
      if (text.includes(value)) {
        card.classList.remove('is-hidden');
        card.classList.add('is-searched');
      }
    });
  }
};

const onFormFilter = (evt) => {
  let value = input.value.trim().toLowerCase();
  evt.preventDefault();

  if (value !== '') {
    cards.forEach((card) => {
      card.classList.add('is-hidden');
    });
    searchTitle(value);
    searchText(value);
    toggleBtns();

    const findedCards = document.querySelectorAll('.product-card.is-searched');
    if (findedCards.length < 1) {
      renderError();
    }
  }
};

export const searching = () => {
  if (searchForm && cards && errorMsg && input && resetBtn && searchBtn) {
    searchForm.addEventListener('submit', onFormFilter);
  }
};
