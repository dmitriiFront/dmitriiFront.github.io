let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.menu-toggle');
let hasBecomeWrapper = document.querySelector('.picture__has-become-wrapper');
let itWasWrapper = document.querySelector('.picture__it-was-wrapper');
let changingSlider = document.querySelector('.control__changing-slider');
let change = document.querySelector('.change');
let pictureItWas = document.querySelector('.picture__it-was-wrapper');
let pictureHasBecome = document.createElement('div');

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

let changePrepend = function() {
  pictureHasBecome.classList = 'picture__has-become-wrapper';
  pictureHasBecome.innerHTML = `<picture class="picture__has-become">
              <source type="image/webp" media="(min-width: 1400px)" srcset="img/webp/after-desktop@1x.webp 1x, img/webp/after-desktop@2x.webp 2x">
              <source type="image/webp" media="(min-width: 768px)" srcset="img/webp/after-tablet@1x.webp 1x, img/webp/after-tablet@2x.webp 2x">
              <source type="image/webp" srcset="img/webp/after-mobile@1x.webp 1x, img/webp/after-mobile@2x.webp 2x">

              <source media="(min-width: 1440px)" srcset="img/after-desktop@1x.png 1x, img/after-desktop@2x.png 2x">
              <source media="(min-width: 768px)" srcset="img/after-tablet@1x.png 1x, img/after-mobile@2x.png 2x">
              <img class="example__image" src="img/after-mobile@1x.png" srcset="img/after-mobile@2x.png 2x" alt="пример похудевшего кота">
            </picture>`;
  if (!change.querySelector('.picture__has-become-wrapper')) {
    change.prepend(pictureHasBecome);
  }
}

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
    pictureHasBecome.remove();
    change.prepend(pictureItWas);
   }

  if (event.target.closest(".control__item-has-become")) {
    range.value = 3;
    showSlider_3();
    changePrepend();
    pictureItWas.remove();
  }
});

let range = document.querySelector('.control__changing-real');
function testFunction() {
  if (range.value == 2) {
    showSlider_2();
  }
  if (range.value == 3) {
    showSlider_3();
    pictureItWas.remove();
    changePrepend();
  }
  if (range.value == 1) {
    showSlider_1();
    pictureHasBecome.remove();
    change.prepend(pictureItWas);
  }
}
