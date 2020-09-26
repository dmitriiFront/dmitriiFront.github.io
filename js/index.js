let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.menu-toggle');
let changingSlider = document.querySelector('.control__changing-slider');
let changePictureWrapper = document.querySelector('.change__picture--wrapper');

let showSlider_1 = function() {
  changingSlider.classList.add('control__changing-slider--before');
  changingSlider.classList.remove('control__changing-slider--after');
}

let showSlider_2 = function() {
  changingSlider.classList.remove('control__changing-slider--before');
  changingSlider.classList.remove('control__changing-slider--after');
}

let showSlider_3 = function() {
  changingSlider.classList.add('control__changing-slider--after');
  changingSlider.classList.remove('control__changing-slider--before');
}

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
  }

  if (event.target.closest(".control__item-it-was")) {
    range.value = 1;
    showSlider_1();
    changePictureWrapper.style.transform = 'translateX(0%)';
   }

  if (event.target.closest(".control__item-has-become")) {
    range.value = 3;
    showSlider_3();
    changePictureWrapper.style.transform = 'translateX(-50%)';
  }
});

let range = document.querySelector('.control__changing-real');
function testFunction() {
  if (range.value == 2) {
    showSlider_2();
  }
  if (range.value == 3) {
    showSlider_3();
    changePictureWrapper.style.transform = 'translateX(-50%)';
  }
  if (range.value == 1) {
    showSlider_1();
    changePictureWrapper.style.transform = 'translateX(0%)';
  }
}

