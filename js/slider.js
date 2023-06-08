// スライダー
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const ul = document.querySelector('.js-slider');
const slides = document.querySelectorAll('.js-slider-slid');
const dotsContainer = document.querySelector('nav');
const dots = [];
let currentIndex = 0;
let slideInterval;

// スライドの動作
const moveSlides = () => {
  const slideWidth = slides[0].clientWidth;
  ul.style.transform = `translateX(${-slideWidth * currentIndex}px)`
};


// dotsボタンを動的に生成
const dotsCreate = () => {
  for (let i = 0; i < slides.length; i++) {
    const button = document.createElement('button');
    button.addEventListener('click', () => {
      currentIndex = i;
      clearInterval(slideInterval)
      moveDots()
      moveSlides()
      startSlideInterval()
    });
    dots.push(button);
    dotsContainer.appendChild(button);
  }
  dots[0].classList.add('dots');
};

// dotsをスライドと連動させる
const moveDots = () => {
  dots.forEach((dot) => {
    dot.classList.remove('dots')
  });
  dots[currentIndex].classList.add('dots');
};

// 自動再生
const startSlideInterval = () => {
  slideInterval = setInterval(() => {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    moveDots()
    moveSlides()
  }, 3000);
}

dotsCreate()
startSlideInterval()

// 画面から外れたら自動再生を停止


// 戻る次へボタン
next.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  clearInterval(slideInterval)
  moveDots()
  moveSlides()
  startSlideInterval()
});

prev.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  clearInterval(slideInterval)
  moveDots()
  moveSlides()
  startSlideInterval()
});
