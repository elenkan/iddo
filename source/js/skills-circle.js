'use strict';
(function() {

  const fillCircle = (element) => {
    const array = Array.from(element.querySelectorAll('svg'));
    array.forEach(item =>
      item.querySelector('circle').classList.add(`skills__img--${item.querySelector('text').textContent}`));
  };

 const options = {
  threshold: 0.7
 };

 const observeCircle = entries => entries.forEach(entry => entry.isIntersecting && fillCircle(entry.target));
 const observer = new IntersectionObserver(observeCircle, options);
 observer.observe(document.querySelector('.skills__statistics'));

})();
