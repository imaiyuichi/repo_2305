// モーダル
const open = document.querySelector('.js-open');
const mask = document.querySelector('.js-mask');
const modal = document.querySelector('.js-modal__contents');
const close = document.querySelector('.js-close');
const body = document.querySelector('body');

open.addEventListener('click', () => {    
    mask.classList.add('modal-active');
    modal.classList.add('modal-active');
    body.classList.add('modal-active');
});

close.addEventListener('click', () => {    
    mask.classList.remove('modal-active');
    modal.classList.remove('modal-active');
    body.classList.remove('modal-active');
});

mask.addEventListener('click', () => {    
    close.click();
});

