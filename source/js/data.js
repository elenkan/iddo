'use strict';
(function() {
const MULTIPLIER = 10000000000;
const QUANTITY = 15;
let authors = ['Michael Joe', 'Jeremy Scott', 'Justin West','Kate Smith'];
const categories = ['website', 'branding'];
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

const getRandomNumber = number=>  Math.round(Math.random() * number);

const getRandomElement = array => array[getRandomNumber((array.length - 1))]

const getRandomDate = () => (Date.now() - getRandomNumber(MULTIPLIER));


let getDateProject = (data = new Date(getRandomDate()))=> `${months[data.getMonth()]} ${data.getDate()}, ${data.getFullYear()}`;

const works = new Array(getRandomNumber(QUANTITY))
.fill('')
.map((item)=>
  (item = {
    category: `${getRandomElement(categories)} project`,
    author: getRandomElement(authors),
    srcImg: getRandomElement(images),
    dateProject: getDateProject()
}));

window.data = {
  works: works
};
})();

