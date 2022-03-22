const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button--right") ;
const previousButton = document.querySelector(".carousel__button--left");
const dotNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
console.log(slideWidth);

//arrange slides next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
}

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove("current-slide");
targetDot.classList.add("current-slide");
}

//when click left, move slides to left
previousButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide");
    const previousSlide = currentSlide.previousElementSibling;
    const currentDot = dotNav.querySelector(".current-slide");
    const previousDot = currentDot.previousElementSibling;
    moveToSlide(track, currentSlide, previousSlide);
    updateDots(currentDot, previousDot);
});

//when click right, move slides to right
nextButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotNav.querySelector(".current-slide");
    const nextDot = currentDot.nextElementSibling;
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
});


//when click nav-indicator move to that slide

dotNav.addEventListener("click", e => {
    //what dot was clicked on?
const targetDot = e.target.closest("button");
if (!targetDot) return;
const currentSlide = track.querySelector(".current-slide");
const currentDot = dotNav.querySelector(".current-slide");
const targetIndex = dots.findIndex(dot => dot === targetDot);
const targetSlide = slides [targetIndex];

moveToSlide(track, currentSlide, targetSlide);

updateDots(currentDot, targetDot);
});
