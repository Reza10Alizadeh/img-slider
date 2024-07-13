const navLinks = document.querySelectorAll('.slider-nav a');
const slider = document.querySelector('.slider');

navLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        slider.scrollTo({
            left: slider.clientWidth * index,
            behavior: 'smooth'
        });
    });
});
