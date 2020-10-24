'use strict';
(function(){
const signUpBtn = document.querySelector('.page-header__subscribe-link');
const modal = document.querySelector('.modal-signup');
const closeBtn = document.querySelector('.signup-form__btn-cancel');

signUpBtn.addEventListener('click', function() {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

})();
