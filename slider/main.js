const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const slideLength = slides.length;

const goToSlide = function (slide) {
    slides.forEach((s, i) => {
        s.style.transform = `translateX(${100 * (i - slide)}%)`
    })
}

goToSlide(0)

const goToNext = function () {
    if (currentSlide === slideLength -1 ) {
        currentSlide = 0
    } else {
        currentSlide++
    }
    goToSlide(currentSlide)
}

const goToPrev = function () {
    if (currentSlide === 0) {
        currentSlide = slideLength - 1;
    } else {
        currentSlide--
    }

    goToSlide(currentSlide);
}

btnRight.addEventListener('click', goToNext);
btnLeft.addEventListener('click', goToPrev)