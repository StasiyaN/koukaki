document.addEventListener('DOMContentLoaded', function () {
//declation de variables banner
    const banner = document.getElementById('banner');
    const videoContainer = banner.querySelector('.banner-video');
    const logo = banner.querySelector('.logo-img');
    let scrollY = window.scrollY; // Initial scroll position

//declarations de variables nuages
const cloudLittle = document.querySelector('.cloud__little');
const cloudBig = document.querySelector('.cloud__big');    




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

function parallax () {
  const newScrollY = window.scrollY; // Update scroll position
  const movementRatio = (newScrollY - scrollY) / window.innerHeight; // Calculate movement ratio
  videoContainer.style.transform = `translateY(${movementRatio *80}px)`; // Apply parallax effect with a multiplier
  logo.style.transform = `translateY(${movementRatio * 180}px)`; // Apply parallax effect with a multiplier
 // scrollY = newScrollY; // Update scrollY for next scroll event
 }

 //clouds




 
window.addEventListener('scroll', handleScroll);


});




