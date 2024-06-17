const searchInput = document.querySelector('#search');


export const searching = () => {
  if (searchInput) {
    searchInput.onInput = function () {
      let value = this.value.trim();
      let cards = document.querySelectorAll('.product-card');
      if (value !== '') {
        cards.forEach((card) => {
          const title = card.querySelector('.product-card__title');
          if (title.innerText.search(value) === -1) {
            card.classList.add('is-hidden');
          }
        });
      } else {
        cards.forEach((card) => card.classList.remove('is-hidden'));
      }

    };
  }
};
