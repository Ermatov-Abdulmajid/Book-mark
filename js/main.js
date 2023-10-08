const Link = document.querySelectorAll('.features__link');
const Item = document.querySelectorAll('.features__item');
const TabsPanel = document.querySelectorAll('.features__inner')

function deactivateTabsPanel () {
     TabsPanel.forEach(function (TabsPanel) {
          TabsPanel.classList.remove('features__inner-open');
     });
}

function deactivateTabsItem () {
     Item.forEach(function (Item) {
          Item.classList.remove('features__link--active');
     });
}

Link.forEach(function (Link) {
     Link.addEventListener('click' , function (evt) {
          evt.preventDefault();
          
          deactivateTabsItem ();

          Link.parentElement.classList.add('features__link--active');
          
          deactivateTabsPanel ();
          const elActivePanel = document.querySelector('Link.dataset.tabTarget');
          elActivePanel.classList.add('features__inner-open');
          
     });
});



// const elQuestionWrapper = document.querySelector('.question-wrapper')
// const elQuestionWrapperIcon = document.querySelector('.question-wrapper__icon')
// const elsIndexQuestionLink = document.querySelectorAll('.index-question__link');
// const elIndexQuestionLink = document.querySelector('.index-question__link');
// const elQuestionWrapperLink = document.querySelector('.question-wrapper__link')

// elsIndexQuestionLink.forEach(function (elsIndexQuestionLink) {
//      elsIndexQuestionLink.addEventListener('click' , function (evt) {
//           evt.preventDefault();
//      });
// });

// elIndexQuestionLink.addEventListener('click' , function () {
//      elQuestionWrapper.classList.add('question-wrapper__js');
// });

// elQuestionWrapperLink.addEventListener('click' , function (evt) {
//      evt.preventDefault();
//      elQuestionWrapper.classList.remove('question-wrapper__js');
// });

// const elIndexBottomForm = document.querySelector('.index-bottom__form');

// elIndexBottomForm.addEventListener('submit', function (evt) {
//      evt.preventDefault(evt);
// });