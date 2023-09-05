ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 3000,
    delay: 200
});

ScrollReveal().reveal('.image img', { origin: 'top' });
ScrollReveal().reveal('.main-left-left', { origin: 'left' });
ScrollReveal().reveal('.main-left-right', { origin: 'bottom' });
ScrollReveal().reveal('.main-right-top', { origin: 'top' });
ScrollReveal().reveal('.main-right-bottom', { origin: 'right' });