document.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.logo-img');
    parallax.style.transform = 'translateY(' + scrolled * 0.5 + 'px)';
});
