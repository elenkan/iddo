'use strict';
(function () {

  const sliderButtons = Array.from(document.querySelectorAll('.feedback__button'));
  const sliders = Array.from(document.querySelectorAll('.feedback-post'));

  const changeSliderVisible = (evt)=> {
    window.interactive.changeButtonStatus(evt,sliderButtons,'feedback__button-active');
    let indexElement = sliderButtons.indexOf(evt.target);
    sliders.forEach(item=>{
      if(!item.classList.contains('non-visible')){
        item.classList.add('non-visible');
      }
    });
    sliders[indexElement].classList.remove('non-visible');
  };

  sliderButtons.forEach(slider=> slider.addEventListener('click', function(evt){
    changeSliderVisible(evt);
  }));

})();
