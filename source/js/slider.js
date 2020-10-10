'use strict';
(function () {
  let sliderOneBtn = document.querySelector('.feedback__one-button');
  let sliderTwoBtn = document.querySelector('.feedback__two-button');
  let sliderThreeBtn = document.querySelector('.feedback__three-button');
  let sliderOne = document.querySelector('.feedback-post:first-of-type');
  let sliderTwo = document.querySelector('.feedback-post:nth-of-type(2)');
  let sliderThree = document.querySelector('.feedback-post:last-of-type');

    sliderTwoBtn.addEventListener('click', function() {
    sliderOne.classList.add('non-visible');
    sliderThree.classList.add('non-visible');
    sliderOneBtn.classList.remove('feedback__button-active');
    sliderThreeBtn.classList.remove('feedback__button-active');
    sliderTwo.classList.remove('non-visible');
    sliderTwoBtn.classList.add('feedback__button-active');
  });

  sliderThreeBtn.addEventListener('click', function() {
    sliderOne.classList.add('non-visible');
    sliderTwo.classList.add('non-visible');
    sliderThree.classList.remove('non-visible');
    sliderTwoBtn.classList.remove('feedback__button-active');
    sliderThreeBtn.classList.add('feedback__button-active');
  });

  sliderOneBtn.addEventListener('click', function() {
    sliderTwo.classList.add('non-visible');
    sliderThree.classList.add('non-visible');
    sliderTwoBtn.classList.remove('feedback__button-active');
    sliderThreeBtn.classList.remove('feedback__button-active');
    sliderOne.classList.remove('non-visible');
    sliderThree.classList.add('non-visible');
    sliderOneBtn.classList.add('feedback__button-active');
  });

})();
