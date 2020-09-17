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

document.addEventListener('click', function(event) {
  if (event.target.closest(".checkboxes__list")) {
    let checkbox = document.querySelector('.checkboxes');
    let circleInActive = checkbox.querySelectorAll('.checkboxes__circle-in--active');

    if (circleInActive.length > 0) {
      for (let i=0; i < circleInActive.length; i++ ) {
        circleInActive[i].classList.remove('checkboxes__circle-in--active');
      }
    }

    event.target.closest('.checkboxes__list')
    .querySelector('.checkboxes__circle-in')
    .classList.toggle('checkboxes__circle-in--active');
  // console.log(b);
  }

  let hasBecomeWrapper = document.querySelector('.picture__has-become-wrapper');
  let itWasWrapper = document.querySelector('.picture__it-was-wrapper');

  if (event.target.closest(".control__item-it-was")) {
    let controlItemItWas = document.querySelector('.control__changing-slider');
    controlItemItWas.classList.remove('control__changing-slider--has-become');
    controlItemItWas.classList.add('control__changing-slider--it-was');

    itWasWrapper.classList.remove('wrapper-hidden');
    hasBecomeWrapper.classList.add('wrapper-hidden');
   }

  if (event.target.closest(".control__item-has-become")) {
    // let controlSlider =
   let controlItemHasBecome = document.querySelector('.control__changing-slider');
   controlItemHasBecome.classList.add('control__changing-slider--has-become');
   controlItemHasBecome.classList.remove('control__changing-slider--it-was');

    itWasWrapper.classList.add('wrapper-hidden');
    hasBecomeWrapper.classList.remove('wrapper-hidden');
  }
});
