function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};
const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {
    sliderImages.forEach(slideImage => {
        const slideInAt = (window.scrollY + window.innerHeight) - slideImage.height / 2;
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
    })
}
window.addEventListener("scroll", debounce(checkSlide));