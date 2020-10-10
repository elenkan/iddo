'use strict';
(function() {
  let members = document.querySelectorAll('.team-list__item');
  let teamButton = document.querySelector('.team__button');
  const INDEX_ELEMENT = 2;

  window.interactive.showHiddenElement(teamButton, members, INDEX_ELEMENT);

})();
