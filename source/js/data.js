'use strict';
(function() {

const getRandomElement = array => {
  let indexElement = Math.round(Math.random() * (array.length - 1));
  return array[indexElement];
};
let authors = ['Michael Joe', 'Jeremy Scott', 'Justin West'];
let images = ['https://funkyimg.com/i/37Pvo.jpg',
'https://funkyimg.com/i/37Pvp.png',
'https://funkyimg.com/i/37Pvq.png',
'https://funkyimg.com/i/37Pvt.png',
'https://funkyimg.com/i/37Pvu.png',
'https://funkyimg.com/i/37Pvv.jpg',
'https://funkyimg.com/i/37Pvw.jpg',
'https://funkyimg.com/i/37Pvx.png'
];

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
 'August', 'September', 'October', 'November', 'December'];

let dateProject = `${months[new Date().getMonth()]} ${new Date().getDate()}, ${new Date().getFullYear()}`;

const works = [
  {
    category: 'website project',
    author: getRandomElement(authors),
    srcImg: getRandomElement(images),
    dateProject
  },

  {
    category: 'branding project',
    author: getRandomElement(authors),
    srcImg: getRandomElement(images),
    dateProject
  },

  {
    category: 'branding project',
    author: getRandomElement(authors),
    srcImg: getRandomElement(images),
    dateProject
  },

  {
    category: 'branding project',
    author: getRandomElement(authors),
    srcImg: getRandomElement(images),
    dateProject
  },

  {
    category: 'website project',
    author: getRandomElement(authors),
    srcImg: getRandomElement(images),
    dateProject
  },

  {
    category: 'website project',
    author: getRandomElement(authors),
    srcImg: getRandomElement(images),
    dateProject
  },

  {
    category: 'website project',
    author: getRandomElement(authors),
    srcImg: getRandomElement(images),
    dateProject
  },

  {
    category: 'website project',
    author: getRandomElement(authors),
    srcImg: getRandomElement(images),
    dateProject
  }
];


window.data = {
  works: works
};
})();

