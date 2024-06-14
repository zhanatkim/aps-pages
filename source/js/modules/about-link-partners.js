const links = document.querySelectorAll('.about-partners__link');

const modal = document.querySelector('.modal--link');

const onLinkOpenModal = (evt) => {
  const link = evt.target.closest('.about-partners__link');
  evt.preventDefault();
  const modalLink = modal.querySelector('.about-link-modal__link');
  modalLink.setAttribute('href', link.href);
};

export const setLinkOpenModal = () => {
  if (links && modal) {
    links.forEach((link) => {
      link.addEventListener('click', onLinkOpenModal);
    });
  }
};
