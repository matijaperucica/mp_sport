document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.logo-wrapper');
    const leftArrow = document.querySelector('.nav-arrow.left');
    const rightArrow = document.querySelector('.nav-arrow.right');

    const scrollAmount = 300;
    const autoScrollInterval = 1500;

    // Kloniranje sadržaja radi infinite loop-a
    const clone = carousel.innerHTML;
    carousel.innerHTML += clone;

    // Ručno skrolovanje
    const scrollCarousel = (direction) => {
        carousel.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
    };

    if (leftArrow) leftArrow.addEventListener('click', () => scrollCarousel(-1));
    if (rightArrow) rightArrow.addEventListener('click', () => scrollCarousel(1));

    // Auto-scroll
    setInterval(() => {
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });

        // Ako smo prošli prvu polovinu (original), reset na početak druge polovice (neprimjetno)
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
            carousel.scrollLeft = 0;
        }

    }, autoScrollInterval);
});

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

