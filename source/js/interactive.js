'use strict';
(function() {
  var portfolioButton = document.querySelector('.portfolio__button');
  var teamButton = document.querySelector('.team__button');
  var projects = document.querySelectorAll('.project-list__item');
  var members = document.querySelectorAll('.team-list__item');
  var skills = document.querySelectorAll('.skills-list__item');
  var sliderOneBtn = document.querySelector('.feedback__one-button');
  var sliderTwoBtn = document.querySelector('.feedback__two-button');
  var sliderThreeBtn = document.querySelector('.feedback__three-button');
  var sliderOne = document.querySelector('.feedback-post:first-of-type');
  var sliderTwo = document.querySelector('.feedback-post:nth-of-type(2)');
  var sliderThree = document.querySelector('.feedback-post:last-of-type');
  var allFilterBtn = document.querySelector('.portfolio-list__button--all');
  var websiteFilterBtn = document.querySelector('.portfolio-list__button--website');
  var brandingFilterBtn = document.querySelector('.portfolio-list__button--branding');

  window.addEventListener('load', function() {
    allFilterBtn.click();
  });

  var removeClass = function(array, className) {
    for (var i = 1; i < array.length; i++) {
      if (array[i].classList.contains(className)) {
        array[i].classList.remove(className);
      }
    }
  };

  var changeColors = function(element, main_color, bg_color) {
    element.style.color = main_color;
    element.style.backgroundColor = bg_color;
  };

  var changeVisible = function(array, className) {
    for (var k = 0; k < array.length; k++) {
      if (array[k].classList.contains(className)) {
        portfolioButton.classList.add('non-visible');
        array[k].classList.add('non-visible');
      }
      // else if (k>=7) {
      //     array[k].classList.add('non-visible');
      //      portfolioButton.classList.remove('non-visible');
      //       portfolioButton.addEventListener('click', function(evt) {
      //       evt.preventDefault();
      //       removeClass(projects, 'non-visible');
      //       portfolioButton.classList.add('non-visible');
      //     });
      // }
      else {
        array[k].classList.remove('non-visible');
      }
    }
  };

  allFilterBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    changeColors(allFilterBtn, '#ffffff', '#ca3c3c');
    changeColors(brandingFilterBtn, '#ca3c3c', '#ebebeb');
    changeColors(websiteFilterBtn, '#ca3c3c', '#ebebeb');
    for (var p = 0; p < projects.length; p++) {
      projects[p].classList.remove('non-visible');
      portfolioButton.classList.remove('non-visible');
      if (p >= 6) {
        projects[p].classList.add('non-visible');
        portfolioButton.addEventListener('click', function(evt) {
          evt.preventDefault();
          removeClass(projects, 'non-visible');
          portfolioButton.classList.add('non-visible');
        });
      }
    }
  });

  websiteFilterBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    changeColors(allFilterBtn, '#ca3c3c', '#ebebeb');
    changeColors(websiteFilterBtn, '#ffffff', '#ca3c3c');
    changeColors(brandingFilterBtn, '#ca3c3c', '#ebebeb');
    changeVisible(projects, 'branding-project');
  });

  brandingFilterBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    changeColors(brandingFilterBtn, '#ffffff', '#ca3c3c');
    changeColors(allFilterBtn, '#ca3c3c', '#ebebeb');
    changeColors(websiteFilterBtn, '#ca3c3c', '#ebebeb');
    changeVisible(projects, 'website-project');
  });

  teamButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    removeClass(members, 'non-visible');
    teamButton.classList.add('non-visible');
  });

  sliderTwoBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    console.log(sliderOne);
    sliderOne.classList.add('non-visible');
    sliderThree.classList.add('non-visible');
    sliderOneBtn.classList.remove('feedback__button-active');
    sliderThreeBtn.classList.remove('feedback__button-active');
    sliderTwo.classList.remove('non-visible');
    sliderTwoBtn.classList.add('feedback__button-active');
  });

  sliderThreeBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    sliderOne.classList.add('non-visible');
    sliderTwo.classList.add('non-visible');
    sliderTwoBtn.classList.remove('feedback__button-active');
    sliderThree.classList.remove('non-visible');
    sliderThreeBtn.classList.add('feedback__button-active');
  });

  sliderOneBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    sliderTwo.classList.add('non-visible');
    sliderThree.classList.add('non-visible');
    sliderTwoBtn.classList.remove('feedback__button-active');
    sliderThreeBtn.classList.remove('feedback__button-active');
    sliderOne.classList.remove('non-visible');
    sliderOneBtn.classList.add('feedback__button-active');
  });

  var addClickListener = function(element) {
    var skillButton = element.querySelector('.skills-list__btn');
    var skillText = element.querySelector('.skills-list__text');
    var minus = skillButton.querySelector('span');
    element.addEventListener('click', function(evt) {
      evt.preventDefault();
      skillText.classList.toggle('non-visible');
      minus.classList.toggle('skills-list_close-sign');
      minus.classList.toggle('skills-list_open-sign');
      skillButton.classList.toggle('skills-list__btn--active');
    });
  };

  var toggleButton = function() {
    for (var j = 0; j <= skills.length - 1; j++) {
      var skillElement = skills[j];
      addClickListener(skillElement);
    }
  };

  toggleButton();

})();
