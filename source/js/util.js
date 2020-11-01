'use strict';
(function() {
    const getRandomNumber = number => Math.round(Math.random() * number);

    const getRandomElement = array => array[getRandomNumber((array.length - 1))];
    
    const changeVisibleButton = (button, list, visibleListLength) => {
        if (list.length <= visibleListLength) {
          button.classList.add('non-visible');
        } else {
          button.classList.remove('non-visible');
        }
      };

    const changeButtonStatus = (evt, array, className) => {
      array.find(item=>item.classList.contains(className)).classList.remove(className);
      evt.target.classList.add(className);
      }; 

      window.util = {
        getRandomNumber: getRandomNumber,
        getRandomElement: getRandomElement,
        changeVisibleButton: changeVisibleButton,
        changeButtonStatus: changeButtonStatus
      };
})();