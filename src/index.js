import './index.css';

const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');
const burgerClose = document.querySelector('.burger-menu__btn');

if (burger) {
  burger.addEventListener('click', () => {
    burgerMenu.classList.add('active');
  });
}

if (burgerClose) {
  burgerClose.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
  });
}

// Закрытие меню при клике вне его
burgerMenu.addEventListener('click', (e) => {
  if (e.target === burgerMenu) {
    burgerMenu.classList.remove('active');
  }
});
