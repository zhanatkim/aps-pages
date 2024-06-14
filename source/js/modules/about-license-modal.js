const licenses = document.querySelectorAll('.about-licenses__slide');
const modal = document.querySelector('.modal--license');

const onLinkOpenModal = (evt) => {
  const link = evt.target.closest('.about-licenses__slide');
  // evt.preventDefault();
  const content = modal.querySelector('.about-license-modal');
  content.innerHTML = link.innerHTML;
};

export const setLicenseOpenModal = () => {
  if (licenses && modal) {
    licenses.forEach((link) => {
      link.addEventListener('click', onLinkOpenModal);
    });
  }
};
