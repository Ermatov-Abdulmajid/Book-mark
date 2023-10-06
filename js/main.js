const elFeaturesItem = document.querySelector('.features__item')
const elJsFeaturesLink = document.querySelector('.features__link');
const elsFeaturesItem = document.querySelectorAll('.features__item')
const elsJsFeaturesLink = document.querySelectorAll('.features__link');

elsJsFeaturesLink.forEach(function (elsJsFeaturesLink) {
     elsJsFeaturesLink.addEventListener('click' , function (evt) {
          evt.preventDefault();
          
          elsFeaturesItem.forEach(function (elsFeaturesItem) {
               elsFeaturesItem.classList.remove('features__link--active');
          });
          elJsFeaturesLink.parentElement.classList.add('features__link--active');
     });
});

const elQuestionWrapper = document.querySelector('.question-wrapper')
const elQuestionWrapperIcon = document.querySelector('.question-wrapper__icon')
const elsIndexQuestionLink = document.querySelectorAll('.index-question__link');
const elIndexQuestionLink = document.querySelector('.index-question__link');
const elQuestionWrapperLink = document.querySelector('.question-wrapper__link')

elsIndexQuestionLink.forEach(function (elsIndexQuestionLink) {
     elsIndexQuestionLink.addEventListener('click' , function (evt) {
          evt.preventDefault();
     });
});

elIndexQuestionLink.addEventListener('click' , function () {
     elQuestionWrapper.classList.add('question-wrapper__js');
});

elQuestionWrapperLink.addEventListener('click' , function (evt) {
     evt.preventDefault();
     elQuestionWrapper.classList.remove('question-wrapper__js');
});

const elIndexBottomForm = document.querySelector('.index-bottom__form');

elIndexBottomForm.addEventListener('submit', function (evt) {
     evt.preventDefault(evt);
});