'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__menu-on');
  } else {
    document.body.classList.remove('page__menu-on');
  }
});

function stopDefAction(evt) {
  evt.preventDefault();
}

document.querySelector('#button').addEventListener(
  'click', stopDefAction, false
);

function resField(evt) {
  document.querySelector('#email').value = '';
}

document.querySelectorAll('#send').addEventListener(
  'click', resField, false
);


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
