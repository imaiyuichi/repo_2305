// スライダー

const slideContainer = document.querySelector('.slider__container');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slideList = document.querySelector('.js-slider');
const slides = document.querySelectorAll('.js-slider-slid');
const dotsContainer = document.querySelector('nav');
const dots = [];
let currentIndex = 0;
let slideInterval;
let isIntersecting = false;

// スライドの動作
const moveSlides = () => {
  const slideWidth = slides[0].clientWidth;
  slideList.style.transform = `translateX(${-slideWidth * currentIndex}px)`
  
};

// dotsボタンを動的に生成
const dotsCreate = () => {
  for (let i = 0; i < slides.length; i++) {
    const button = document.createElement('button');
    button.addEventListener('click', () => {
      currentIndex = i;
      clearInterval(slideInterval);
      moveDots();
      moveSlides();
      startSlideInterval();
    });
    dots.push(button)
    dotsContainer.appendChild(button)
  }
  dots[0].classList.add('dots')
}

// dotsをスライドと連動させる
const moveDots = () => {
  dots.forEach((dot) => {
    dot.classList.remove('dots')
  })
  dots[currentIndex].classList.add('dots')
}

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
})

prev.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1
  }
  clearInterval(slideInterval)
  moveDots()
  moveSlides()
  startSlideInterval()
});

// 自動再生
const startSlideInterval = () => {
  if (isIntersecting) {
    clearInterval(slideInterval)
    slideInterval = setInterval(() => {
      currentIndex++;
      if (currentIndex >= slides.length) {
        currentIndex = 0;
      }
      moveDots()
      moveSlides()
    }, 3000)
    console.log('インターバル開始');
  } else {
    stopSlideInterval()
  }
};

const stopSlideInterval = () => {
  clearInterval(slideInterval)
  console.log('インターバル停止')
};

dotsCreate();

// 画面から外れたら自動再生を停止
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      isIntersecting = true;
      startSlideInterval()
    } else {
      isIntersecting = false;
      stopSlideInterval()
    }
  });
};

const options = {
  root: null,
  threshold: 0.5,
};

const observer = new IntersectionObserver(callback, options)
observer.observe(slideContainer)