'use strict';
(function() {
  const members = document.querySelectorAll('.team-list__item');
  const teamButton = document.querySelector('.team__button');
  const INDEX_ELEMENT = 2;

  const showHiddenMember = () => {
    teamButton.addEventListener('click', function() {
      members.forEach((item, index) => {
        if (index >= INDEX_ELEMENT) {
          item.classList.remove('non-visible');
        }
      });
    });
  };

  showHiddenMember();

})();
