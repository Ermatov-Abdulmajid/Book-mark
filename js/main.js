const elIndexBottomForm = document.querySelector('.index-bottom__form');

elIndexBottomForm.addEventListener('submit', function (evt) {
     evt.preventDefault(evt);
});

// const elIndexBottomError = document.querySelector('.index-bottom__error');
// elIndexBottomForm.addEventListener('submit' , function () {
//      elIndexBottomError.classList.add('index-bottom__error-js')
// });

const elsFeaturesLink = document.querySelectorAll('.features__link');
const elsFeaturesItem = document.querySelectorAll('.features__item')

elsFeaturesLink.forEach(function (elsFeaturesLink) {
     elsFeaturesLink.addEventListener('click' , function (evt) {
          evt.preventDefault();
          
          elsFeaturesItem.forEach(function (elsFeaturesItem) {
               elsFeaturesLink.classList.remove('features__link--active');
          });
          elsFeaturesItem.parentElement.classList.add('features__link--active');
     });
});

const elIndexQuestionLink = document.querySelector('.index-question__link');
const elQuestionWrapper = document.querySelector('.question-wrapper')
const elQuestionWrapperIcon = document.querySelector('.question-wrapper__icon')

elIndexQuestionLink.addEventListener('click' , function (evt) {
     evt.preventDefault();
     elQuestionWrapper.classList.add('question-wrapper__js');
});

elQuestionWrapperIcon.addEventListener('click' , function () {
     elQuestionWrapper.classList.remove('question-wrapper__js');
});
