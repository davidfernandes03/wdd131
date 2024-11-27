const hamburgerButton = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav');

hamburgerButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    if (hamburgerButton.textContent === '☰') {
        hamburgerButton.textContent = '✖';
    } else {
        hamburgerButton.textContent = '☰';
    }
});