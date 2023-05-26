// モーダル
{
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
}

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

// スライダー
{
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    const ul = document.querySelector('ul');
    // const slides = ul.children;
    const slides = document.querySelectorAll('li')
    const dots = [];
    let currentIndex = 0;

    console.log(slides);

    // スライドの動作
    const moveSlides = () => {
        const slideWidth = slides[0].clientWidth;
        ul.style.transform = `translateX(${ - slideWidth * currentIndex}px)`;
    };

    // dotsボタンを動的に生成
    const dotsCreate = () => {
        for ( let i = 0; i < slides.length; i++) {
            const button = document.createElement('button');
            button.addEventListener('click', () => {
                currentIndex = i;
                moveDots();
                moveSlides();
            })
            dots.push(button);
            document.querySelector('nav').appendChild(button);    
        }
        dots[0].classList.add('dots');
    };

    console.log(dots)

    // dotsをスライドと連動させる
    const moveDots = () => {
        dots.forEach(dot => {
            dot.classList.remove('dots');
        });
        dots[currentIndex].classList.add('dots');
    }

    dotsCreate();

    next.addEventListener('click', () => {
        currentIndex++;
        if( currentIndex >= slides.length ) {
            currentIndex = 0;
            moveDots();
            moveSlides();
        } else {
            moveDots();
            moveSlides();
        }
    });

    prev.addEventListener('click', () => {
        currentIndex--;
        if( currentIndex <= -1 ) {
            currentIndex = slides.length -1;
            moveDots();
            moveSlides();
        } else {
            moveDots();
            moveSlides();
        }
    });
}