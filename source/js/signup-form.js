'use strict';
(function() {
  const signUpBtn = document.querySelector('.page-header__subscribe-link');
  const modal = document.querySelector('.modal-signup');
  const closeBtn = document.querySelector('.signup-form__btn-cancel');

  const openForm = () => {
    modal.style.display = 'block';
  };

  const closeForm = () => {
    modal.style.display = 'none';
  };

  signUpBtn.addEventListener('click', function() {
    openForm();
  });

  signUpBtn.addEventListener('keydown', function(evt) {
    if (evt.key === 'Enter') {
      openForm();
    }
  });

  closeBtn.addEventListener('click', function() {
    closeForm();
  });

  closeBtn.addEventListener('keydown', function(evt) {
    if (evt.key === 'Enter') {
      closeForm();
    }
  });

})();
