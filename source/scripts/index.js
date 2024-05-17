/* в этот файл добавляет скрипты*/
const mainHeader = document.querySelector('.main-header');
const mainNavList = document.querySelector('.main-navigation__list');
const mainHeaderToggle = document.querySelector('.main-header__toggle');

mainHeader.classList.remove('main-header--nojs');
mainHeaderToggle.addEventListener('click', () => {
  if (mainNavList.classList.contains('site-list--opened')) {
    mainNavList.classList.remove('site-list--opened');
    mainNavList.classList.add('site-list');
    mainHeader.classList.remove('main-header--opened');
  } else {
    mainNavList.classList.remove('site-list');
    mainNavList.classList.add('site-list--opened');
    mainHeader.classList.add('main-header--opened');
  }
});
