'use strict';
(function() {
  let portfolioButton = document.querySelector('.portfolio__button');
  let projectList = document.querySelector('.project-list');
  let allFilterBtn = document.querySelector('.portfolio-list__button--all');
  let websiteFilterBtn = document.querySelector('.portfolio-list__button--website');
  let brandingFilterBtn = document.querySelector('.portfolio-list__button--branding');
  const VISIBLE_LIST_LENGTH = 5;
  const INDEX_ELEMENT = 6;
  const portfolioButtonList = Array.from(document.querySelectorAll('.portfolio-list__button'));

  window.addEventListener('load', function() {
    allFilterBtn.click();
  });

const showHiddenElement = (button, list, indexElement) => {
  button.addEventListener('click', function() {
    button.classList.add('non-visible');
    list.forEach((item, index) => {
      if (index >= indexElement){
        item.classList.remove('non-visible');
      }
    });
  });
};

// const showHiddenElement = (button, list, indexElement) => {
//   button.addEventListener('click', function() {
//     list.forEach((item, index) => {
//       if (index >= indexElement){
//         item.classList.remove('non-visible');
//       }
//     });
//   });
// };





  const changeVisibleBtn = (button, list) => {
    if (list.length <= VISIBLE_LIST_LENGTH) {
      button.classList.add('non-visible');
    } else {
      button.classList.remove('non-visible');
    }
  };

  const renderProjectCard = item =>
    `<article class="project-list__item js-${item.category}" tabindex="0">
            <img src="${item.srcImg}" class="project-list__image" width="370" height="370" alt="${item.category}">
            <div class="project-list__info">
              <span class="project-list__title">${item.category}</span>
              <span class="project-list__author">designed by ${item.author} | ${item.dateProject}</span>
            </div>
        </article>`;

  const renderProjectsList = (array, word) => {
    let newArray = array.filter(element => element.category.includes(word));

    newArray.forEach(item => projectList.insertAdjacentHTML('afterbegin', renderProjectCard(item)));
    changeVisibleBtn(portfolioButton, newArray);

    let projects = projectList.querySelectorAll('.project-list__item');

    projects.forEach((item, index) => {
      if (index >= INDEX_ELEMENT) {
        item.classList.add('non-visible');
      }
    });

    showHiddenElement(portfolioButton,projects, INDEX_ELEMENT);
  };


const changeButtonStatus = (evt, array, className) => {
  array.find(item=>item.classList
    .contains(className))
  .classList.remove(className);
  evt.target.classList.add(className);
};

const renderPortfolioList = (evt)=> {
    projectList.innerHTML = '';
    renderProjectsList(window.data.works, evt.target.dataset.project);
};

portfolioButtonList.forEach(btn=>btn.addEventListener('click', function(evt){
  changeButtonStatus(evt,portfolioButtonList, 'portfolio-list__button--active');
  renderPortfolioList(evt);
}));


window.interactive = {
  showHiddenElement: showHiddenElement,
  changeButtonStatus: changeButtonStatus
}

})();
