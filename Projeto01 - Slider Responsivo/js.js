var manualButtons = document.querySelectorAll('.manual-btn');
var currentSlide = 1;

document.getElementById('radio1').checked = true;

setInterval(() => {
    nextSlide();
}, 4000);

function nextSlide() {
    currentSlide++;

    if (currentSlide > 4) {
        currentSlide = 1;
    }

    document.getElementById('radio' + currentSlide).checked = true;
}