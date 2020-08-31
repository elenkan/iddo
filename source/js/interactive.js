var portfolioButton = document.querySelector('.portfolio__button');
var teamButton = document.querySelector('.team__button');
var projects = document.querySelectorAll('.project-list__item');
var members = document.querySelectorAll('.team-list__item');
var skills = document.querySelectorAll('.skills-list__item');
var skill = document.querySelector('.skills-list__item');
var sliderOneBtn = document.querySelector('.feedback__one-button');
var sliderTwoBtn = document.querySelector('.feedback__two-button');
var sliderThreeBtn = document.querySelector('.feedback__three-button');
var sliderOne = document.querySelector('.feedback-post:first-child');
var sliderTwo = document.querySelector('.feedback-post:nth-child(2)');
var sliderThree = document.querySelector('.feedback-post:nth-child(3)');
var skillsListBtn = document.querySelector('.skills-list__btn');
var closeSign = document.querySelector('.skills-list_close-sign');
var openSign = document.querySelector('.skills-list_open-sign');


var removeClass = function (array, className) {
    for (var i = 1; i < array.length; i++) {
    	if (array[i].classList.contains(className)) {
    		array[i].classList.remove(className);
    	}
    }
  };

  portfolioButton.addEventListener('click', function (evt){
  	evt.preventDefault();
  	removeClass(projects,'non-visible');
  	portfolioButton.classList.add('non-visible');
  });

    teamButton.addEventListener('click', function (evt){
  	evt.preventDefault();
  	removeClass(members,'non-visible');
  	teamButton.classList.add('non-visible');
  });

    var toggleFunc = function () {
      skills.forEach(function (element) {
        var skillButton = element.querySelector('.skills-list__btn');
        var skillText = element.querySelector('.skills-list__text');
        var minus = skillButton.querySelector('span');
        element.addEventListener('click', function (evt) {
          evt.preventDefault();
          skillText.classList.toggle('non-visible');
          minus.classList.toggle('skills-list_close-sign');
          minus.classList.toggle('skills-list_open-sign');
          skillButton.classList.toggle('skills-list__btn--active');
        });
      });
    };

    toggleFunc();

sliderTwoBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  sliderOne.classList.add('non-visible');
  sliderThree.classList.add('non-visible');
  sliderOneBtn.classList.remove('feedback__button--active');
  sliderThreeBtn.classList.remove('feedback__button--active');
  sliderTwo.classList.remove('non-visible');
  sliderTwoBtn.classList.add('feedback__button--active');
});

sliderThreeBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  sliderOne.classList.add('non-visible');
  sliderTwo.classList.add('non-visible');
  sliderTwoBtn.classList.remove('feedback__button--active');
  sliderThree.classList.remove('non-visible');
  sliderThreeBtn.classList.add('feedback__button--active');
});

sliderOneBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  sliderTwo.classList.add('non-visible');
  sliderThree.classList.add('non-visible');
  sliderTwoBtn.classList.remove('feedback__button--active');
  sliderThreeBtn.classList.remove('feedback__button--active');
  sliderOne.classList.remove('non-visible');
  sliderOneBtn.classList.add('feedback__button--active');
});