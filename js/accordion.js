// アコーディオン（クリックしたものが開閉）
{
    const accordion = document.querySelectorAll('.js-accordion');
    accordion.forEach((item) => {
        const button = item.querySelector('.js-accordion-button');
        button.addEventListener('click', () => {
            item.classList.toggle('accordion-active');
        });
    });
}

// アコーディオン（一つ開いたら他を閉じる）
{
    const accordion = document.querySelectorAll('.js-accordion02');
    accordion.forEach(item => {
        const button = item.querySelector('.js-accordion-button02');
        button.addEventListener('click', () => {
            item.classList.toggle('accordion-active');
            accordion.forEach(item02 => {
                if( item !== item02 ) {
                    item02.classList.remove('accordion-active');
                }
            })
        });
    });
}

export default accordion;