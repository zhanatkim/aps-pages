// const modalBtn = document.querySelector('.modal-link__button');
// const modal = document.querySelector('.modal--form');
// const breakpoint = window.matchMedia('(max-width:1023px)');

// export const renderModal = (evt) => {

//   if (!modal || modalBtn) {
//     return;
//   }
//   const targetReview = evt.target.closest('.review');
//   if (!targetReview) {
//     if (!reviewsWrapper.contains(targetReview)) {
//       return;
//     }
//     return;
//   }
//   evt.preventDefault();

//   const modalInner = modal.querySelector('.modal__review');
//   if (!modalInner) {
//     return;
//   }
//   modal.setAttribute('data-modal', targetReview.dataset.openModal);

// };


// export const renderReviewModal = () => {
//   if (reviewsWrapper) {
//     if (!breakpoint.matches) {
//       reviewsWrapper.removeEventListener('click', setModal);
//     }
//     reviewsWrapper.addEventListener('click', setModal);
//   }
// };
