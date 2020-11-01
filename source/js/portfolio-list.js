'use strict';
(function() {
  const portfolioButton = document.querySelector('.portfolio__button');
  const projectList = document.querySelector('.project-list');
  const allFilterBtn = document.querySelector('.js-portfolio-list__button--all');
  const VISIBLE_LIST_LENGTH = 6;
  const INDEX_ELEMENT = 6;
  const NUMBER_OPEN_ELEMENT = 5;
  const portfolioButtonList = Array.from(document.querySelectorAll('.portfolio-list__button'));
  let worksData = window.dataMocks.works;

  window.addEventListener('load', function() {
    allFilterBtn.click();
  });

const showHiddenElement = (button, list) => {//Проверить кнопку, не сразу скрывается
  window.util.changeVisibleButton (button, list);
 
  button.addEventListener('click', function() {
    // let numberHiddenElement = 0;
    //  list
    // .forEach(item => item.classList.contains('non-visible') && (numberHiddenElement += 1));


    // let indexFirstElement = list.length - numberHiddenElement;
    // let indexLastElement = indexFirstElement + NUMBER_OPEN_ELEMENT;
    // console.log(numberHiddenElement);
    // for (let j = indexFirstElement; j <= indexLastElement; j++) {
    //   if(list[j]) {list[j].classList.remove('non-visible');}
      
    //   if (!list[list.length - 1].classList.contains('non-visible')) {
    //     button.classList.add('non-visible');
    //   }
    // }

    let filteredList = list
    .filter(item => item.classList.contains('non-visible'))
    .forEach((item, index) => index < 6 && item.classList.remove('non-visible'));

filteredList = list.filter(item => item.classList.contains('non-visible'));
    if(!filteredList.length) {
      button.classList.add('non-visible');
    }

  });

};

  const renderProjectCard = item =>
    `<article class="project-list__item js-${item.category}">
            <img src="${item.srcImg}" class="project-list__image" width="370" height="370" alt="${item.category}">
            <div class="project-list__info">
              <span class="project-list__title">${item.category}</span>
              <span class="project-list__author">designed by ${item.author} | ${item.dateProject}</span>
            </div>
        </article>`;

  const renderProjectsList = (array, word) => {
    let newArray = array.filter(element => element.category.includes(word));

    newArray.forEach(item => projectList.insertAdjacentHTML('afterbegin', renderProjectCard(item)));

    const projects = Array.from(projectList.querySelectorAll('.project-list__item'));

    projects.forEach((item, index) => {
      if (index >= INDEX_ELEMENT) {
        item.classList.add('non-visible');
      }
    });

    showHiddenElement(portfolioButton, projects);
  };

const renderPortfolioList = (evt)=> {
    projectList.innerHTML = '';
    renderProjectsList(worksData, evt.target.dataset.project);
};

portfolioButtonList.forEach(btn=>btn.addEventListener('click', function(evt){
  window.util.changeButtonStatus(evt,portfolioButtonList, 'portfolio-list__button--active');
  renderPortfolioList(evt);
}));

})();
