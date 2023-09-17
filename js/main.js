const elIndexBottomForm = document.querySelector('.index-bottom__form');

elIndexBottomForm.addEventListener('submit', function (evt) {
     evt.preventDefault(evt);
});

const elIndexBottomError = document.querySelector('.index-bottom__error');
elIndexBottomForm.addEventListener('submit' , function () {
     elIndexBottomError.classList.add('index-bottom__error-js')
});
