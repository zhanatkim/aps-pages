
let renderedCardsCount = 0;
let ArrCards = [];
let renderedCards = [];

export const sliceCards = (cardsList, cardsButton, CARDS_AMOUNT_AT_ONCE) => {
  renderedCardsCount += CARDS_AMOUNT_AT_ONCE;
  ArrCards = Array.from(cardsList);
  if (renderedCardsCount >= ArrCards.length) {
    cardsButton.classList.add('is-hidden');
    renderedCardsCount = ArrCards.length;
    renderedCards = ArrCards;
    renderedCards.forEach((item) => item.classList.remove('is-hidden'));
  } else {
    cardsButton.classList.remove('is-hidden');

    ArrCards.forEach((item) => item.classList.add('is-hidden'));

    renderedCards = ArrCards.slice(0, renderedCardsCount);
    renderedCards.forEach((item) => item.classList.remove('is-hidden'));
  }
};

export const clearCardsList = (cardsButton) => {
  if (cardsButton) {
    renderedCardsCount = 0;
    if (cardsButton.classList.contains('is-hidden')) {
      cardsButton.classList.remove('is-hidden');
    }
  }
};
