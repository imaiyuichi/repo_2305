// スライダー
{
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    const ul = document.querySelector('.js-slider');
    // const slides = ul.children;
    const slides = document.querySelectorAll('.js-slider-slid')
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

export default slider;