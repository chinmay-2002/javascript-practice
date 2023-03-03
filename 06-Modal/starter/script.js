'use strict';

const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnclosemodel = document.querySelector('.close-modal');
const btnOpenModel = document.querySelectorAll('.show-modal');
console.log(btnOpenModel);

for (let i = 0; i < btnOpenModel.length; i++) {
    btnOpenModel[i].addEventListener('click', function () {
        console.log("Button clicked");
        model.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}

const closeModel = function () {
    model.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnclosemodel.addEventListener('click', function () {
    closeModel();
});

overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (e) {
    if (!model.classList.contains('hidden') && e.key == 'Escape') {
        closeModel();
    }
});