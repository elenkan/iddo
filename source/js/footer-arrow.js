'use strict';
(function (){
    const arrow = document.querySelector('.page-footer__arrow');
    arrow.addEventListener('click', (evt)=> {
        evt.preventDefault();
        window.scroll({
            top: 0,
            behavior: 'smooth'
          });
    });

})();