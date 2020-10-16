'use strict';
(function(){

const getAnimation=(element)=>{
let array = element.querySelectorAll('svg');
array.forEach(item=>
  item.querySelector('circle').classList.add(`skills__img--${item.querySelector('text').textContent}`));
};

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
           getAnimation(entry.target);
        }
    })
}, {
    threshold: .7
})

observer.observe(document.querySelector('.skills__statistics'));



})();
