const searchInput = document.querySelector('.search input');
const resetButton = document.querySelector('.search__reset');

export const renderResetButton = () => {
  if (!searchInput && !resetButton) {
    return;
  }
  searchInput.addEventListener('input', () => resetButton.setAttribute('style', 'opacity:1;display:block;'));
  searchInput.addEventListener('change', () => resetButton.removeAttribute('style'));
};
