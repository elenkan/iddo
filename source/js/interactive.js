'use strict';
(function() {
  let portfolioButton = document.querySelector('.portfolio__button');
  let showButtons = document.querySelectorAll('.show-button');
  let projectList = document.querySelector('.project-list');
  let allFilterBtn = document.querySelector('.portfolio-list__button--all');
  let websiteFilterBtn = document.querySelector('.portfolio-list__button--website');
  let brandingFilterBtn = document.querySelector('.portfolio-list__button--branding');
  const VISIBLE_LIST_LENGTH = 5;
  const INDEX_ELEMENT = 6;

  window.addEventListener('load', function() {
    allFilterBtn.click();
  });

const showHiddenElement = (button, list, indexElement) => {
  button.addEventListener('click', function() {
    button.classList.add('non-visible');
    list.forEach((item, index) => {
      if (index >= indexElement) {
        item.classList.remove('non-visible');
      }
    });
  });
};


  const changeVisibleBtn = (button, list) => {
    if (list.length <= VISIBLE_LIST_LENGTH) {
      button.classList.add('non-visible');
    } else {
      button.classList.remove('non-visible');
    }
  };

  const renderProjectCard = item =>
    `<article class="project-list__item ${item.category}">
            <img src="${item.srcImg}" class="project-list__image" width="370" height="370" alt="${item.category}">
            <div class="project-list__info">
              <span class="project-list__title">${item.category}</span>
              <span class="project-list__author">designed by ${item.author} | ${item.dateProject}</span>
            </div>
        </article>`;

  const getList = (array, word) => {
    let arrayOne = array.filter(element => element.category.includes(word));

    arrayOne.forEach(item => projectList.insertAdjacentHTML('afterbegin', renderProjectCard(item)));
    changeVisibleBtn(portfolioButton, arrayOne);

    let projects = projectList.querySelectorAll('.project-list__item');

    projects.forEach((item, index) => {
      if (index >= INDEX_ELEMENT) {
        item.classList.add('non-visible');
      }
    });

    showHiddenElement(portfolioButton,projects, INDEX_ELEMENT);
  };


  allFilterBtn.addEventListener('click', function() {
    allFilterBtn.classList.add('portfolio-list__button--active');
    websiteFilterBtn.classList.remove('portfolio-list__button--active');
    brandingFilterBtn.classList.remove('portfolio-list__button--active');

    projectList.innerHTML = '';
    getList(window.data.works.slice(), 'project');
  });


  websiteFilterBtn.addEventListener('click', function() {
    allFilterBtn.classList.remove('portfolio-list__button--active');
    websiteFilterBtn.classList.add('portfolio-list__button--active');
    brandingFilterBtn.classList.remove('portfolio-list__button--active');

    projectList.innerHTML = '';
    getList(window.data.works, 'website');
  });

  brandingFilterBtn.addEventListener('click', function() {
    allFilterBtn.classList.remove('portfolio-list__button--active');
    websiteFilterBtn.classList.remove('portfolio-list__button--active');
    brandingFilterBtn.classList.add('portfolio-list__button--active');

    projectList.innerHTML = '';
    getList(window.data.works, 'branding');
  });

window.interactive = {
  showHiddenElement: showHiddenElement
}

})();
