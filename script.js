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



    let showDate = true;

    function updateDisplay() {
        const display = document.getElementById('dynamic-clock');
        const now = new Date();

        // Prvo bacimo "fade out" efekt
        display.classList.add('hidden');

        setTimeout(() => {
            if (showDate) {
                // Prikaz datuma: npr. uto, 17.02.2026.
                const dateOptions = { weekday: 'short', day: '2-digit', month: '2-digit', year: 'numeric' };
                display.textContent = now.toLocaleDateString('hr-HR', dateOptions);
            } else {
                // Prikaz vremena: npr. 20:45:12
                display.textContent = now.toLocaleTimeString('hr-HR');
            }
            
            // Vratimo vidljivost
            display.classList.remove('hidden');
            // Promijenimo stanje za idući ciklus
            showDate = !showDate;
        },100); // Pola sekunde traje animacija nestajanja
    }

    // Mijenjaj prikaz svake 3 sekunde
    setInterval(updateDisplay, 3000);

    // Pokreni odmah prvi put
    updateDisplay();

