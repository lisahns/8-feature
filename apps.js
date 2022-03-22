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

//when click left, move slides to left
previousButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide");
    const previousSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, previousSlide);
});

//when click right, move slides to right
nextButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide");
    //console.log(currentSlide);
    const nextSlide = currentSlide.nextElementSibling;
    //console.log(nextSlide);
    moveToSlide(track, currentSlide, nextSlide);
});


//when click nav-indicator move to that slide

