'use strict';
(function() {
  const MULTIPLIER = 10000000000;
  const QUANTITY = 15;
  const MIN_NUMBER_ELEMENT = 1;
  const authors = ['Michael Joe', 'Jeremy Scott', 'Justin West', 'Kate Smith'];
  const categories = ['website', 'branding'];
  const images = ['https://funkyimg.com/i/37Pvo.jpg',
    'https://funkyimg.com/i/37Pvp.png',
    'https://funkyimg.com/i/37Pvq.png',
    'https://funkyimg.com/i/37Pvt.png',
    'https://funkyimg.com/i/37Pvu.png',
    'https://funkyimg.com/i/37Pvv.jpg',
    'https://funkyimg.com/i/37Pvw.jpg',
    'https://funkyimg.com/i/37Pvx.png'
  ];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];
  
  const getRandomDate = () => (Date.now() - window.util.getRandomNumber(MULTIPLIER));
  const getDateProject = (data = new Date(getRandomDate())) => `${months[data.getMonth()]} ${data.getDate()}, ${data.getFullYear()}`;

  const works = new Array(window.util.getRandomNumber(QUANTITY) + MIN_NUMBER_ELEMENT)
    .fill('')
    .map((item) =>
      item = {
        category: `${window.util.getRandomElement(categories)} project`,
        author: window.util.getRandomElement(authors),
        srcImg: window.util.getRandomElement(images),
        dateProject: getDateProject()
      });

  window.dataMocks = {
    works: works
  };
})();
