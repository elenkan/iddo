'use strict';
(function() {

  const fillCircle = (element) => {
    const array = element.querySelectorAll('svg');
    array.forEach(item =>
      item.querySelector('circle').classList.add(`skills__img--${item.querySelector('text').textContent}`));
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        fillCircle(entry.target);
      }
    })
  }, {
    threshold: .7
  })

  observer.observe(document.querySelector('.skills__statistics'));

})();
