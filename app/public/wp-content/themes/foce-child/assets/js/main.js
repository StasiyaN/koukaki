function addFadeIn (entry) {
    entry.target.classList.add('fadeInUp');
}

const sectionObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            addFadeIn(entry);
            observer.unobserve(entry.target);
        }
    });
}, { rootMargin: '-50px 0px -50px 0px' });

const sections = document.querySelectorAll('.story, #characters, #place, #studio, footer');
sections.forEach((section) => {
    sectionObserver.observe(section);
});



