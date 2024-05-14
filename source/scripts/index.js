/* в этот файл добавляет скрипты*/
let mainHeader = document.querySelector('.main-header');
let mainNavList = document.querySelector('.main-navigation__list');
let mainHeaderToggle = document.querySelector('.main-header__toggle');

mainHeaderToggle.addEventListener('click', function () {
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
