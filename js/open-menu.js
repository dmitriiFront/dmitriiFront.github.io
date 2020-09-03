var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.menu-toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');

    // добавлено
    navToggle.classList.add('menu-toggle--opened');
    navToggle.classList.remove('menu-toggle--closed');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');

    // добавлено
    navToggle.classList.remove('menu-toggle--opened');
    navToggle.classList.add('menu-toggle--closed');
  }
});
