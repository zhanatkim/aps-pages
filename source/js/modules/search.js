const cards = document.querySelectorAll('product-card');

const body = document.querySelector('body');

const searchInput = document.querySelector('#search');

// export const search = () => {
//   if (cards && searchInput) {
//     cards.forEach((card) => {
//       card.classList.remove('is-hidden');
//     });

//     body.addEventListener('input', function () {
//       const searchText = searchInput.value.toLowerCase() || '';
//       cards.forEach((el) => {
//         if (el.querySelector('product-title').innerText.toLowerCase().indexOf(searchText) === -1) {
//           el.classList.add('is-hidden');
//         } else {
//           el.classList.remove('is-hidden');
//         }
//       });
//     });
//   }
// };

export const search = () => {
  body.addEventListener('keyup', '#search', function () {
    const searchText = searchInput.val().toLowerCase() || '___';
    cards.forEach((el) => {
      const elem = el;
      if (elem.html().toLowerCase().indexOf(searchText) === -1) {
        elem.addClass('is-hidden');
      } else {
        elem.removeClass('is-hidden');
      }
    });
  });
};

