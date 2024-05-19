const cards = document.querySelectorAll('.dir__list');

const icon = '<svg width="15" height="15" aria-hidden="true"><use xlink:href="img/sprite.svg#icon-star"></use></svg>';
// const icon = document.querySelector('.icon');
export const renderList = () => {
  if (!cards) {
    return;
  }
  cards.forEach((item) => {
    const list = item.querySelectorAll('.dir__item');
    const iconItems = Array.from(list).filter((el) => el.textContent.length <= 26);

    for (let i = 0; i < iconItems.length; i += 2) {
      iconItems[i].innerHTML += icon;
    }
  });
};

