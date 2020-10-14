document.querySelector('.burger, .header__menu').addEventListener('click', () => {
  document.querySelector('.burger').classList.toggle('active');
  document.querySelector('.header__menu').classList.toggle('active');

});