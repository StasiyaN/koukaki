document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded'); 

    //declation de variables banner
    const banner = document.getElementById('banner');
    const videoContainer = banner.querySelector('.banner-video');
    const logo = banner.querySelector('.logo-wrap');
    //let scrollY = window.scrollY; // Initial scroll position
    let lastScrollY = window.scrollY; 
    console.log(logo);
    //declarations de variables nuages
    const cloudLittle = document.querySelector('.cloud__little');
    const cloudBig = document.querySelector('.cloud__big');    
    const sectionPlace = document.getElementById('place');
    
    
    console.log(place);
    
    //functions
    // Function to handle  entire scroll event
    function handleScroll() {
        // Get the place section
        const spans = document.querySelectorAll('h2 span, h3 span');
        spans.forEach(span => {
            // Add your logic to add or remove classes based on scroll position
            if (isElementInViewport(span)) {
                span.classList.add('animated-header');
            } else {
                span.classList.remove('animated-header');
            }
        });
        parallax();
    }
    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function parallax() {
        const newScrollY = window.scrollY; // Update scroll position
        const movementRatio = newScrollY / window.innerHeight; // Calculate movement ratio

        videoContainer.style.transform = `translateY(${movementRatio * 80}px)`; // Apply parallax effect with a multiplier
        logo.style.transform = `translateY(${movementRatio * 180}px)`; // Apply parallax effect with a multiplier
    }
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', function() {
        //nouvelle fonction
        //el dans le vp --> mettre en animation
        const sectionOffsetTop = sectionPlace.offsetTop;
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        if (scrollPosition >= sectionOffsetTop) {
            // calcule la valeur de défilement, détermine l'intensité du déplacement des nuages
            const parallaxValue = (scrollPosition - sectionOffsetTop) / 3;
            // Math.min() limite la valeur de déplacement à 300px
            const movementX = Math.min(parallaxValue, 300);
            // Utilisation de la propriété CSS transform pour modifier la position des nuages avec translateX
            // Le -translationX (distance de déplacement vers la gauche), 'px' pour utiliser le pixel.
            cloudBig.style.transform = 'translateX(' + (-movementX) + 'px)';
            cloudLittle.style.transform = 'translateX(' + (-movementX) + 'px)';
            lastScrollY = newScrollY
        }
    });
    
    //declaration de variables menu
    const menuIcon =  document.querySelector('.menu-icon');
    const burgerMenuContent = document.querySelector('.burger-menu');
    const links = burgerMenuContent.querySelectorAll('li a');
    
    
    //burger menu
    menuIcon.addEventListener('click', function () {
        menuIcon.classList.toggle('active');
        burgerMenuContent.classList.toggle('open');
        document.body.classList.toggle('lock');
        
    });
    //liens
    links.forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('active');
            burgerMenuContent.classList.remove('open');
            document.body.classList.remove('lock');
        });
        
        //*********************************************************************** */
        //transition fluide vers les section
        
        const anchors = document.querySelectorAll('a[href*="#"]');
        anchors.forEach(anchor => {
            anchor.addEventListener('click', event => {
                event.preventDefault(); //cancellin defaut behaviour of the link redirection
                //ne pas utiliser scrollIntoView creer propre 
                const blockID = anchor.getAttribute('href').substring(1);//getting rid of the #
                this.getElementById(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });
        
    });
    
    //*******************************************/
    
    
});