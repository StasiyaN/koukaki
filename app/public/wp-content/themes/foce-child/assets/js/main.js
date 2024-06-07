document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded'); 
    
    //    const menuLinks = document.querySelectorAll('.main-navigation a'); 
    //    console.log(menuLinks);
    //    menuLinks.forEach (menuLink => {
    //     console.log(menuLink);
    //     menuLink.addEventListener('click', function () {
    //         console.log(menuLink.getAttribute('href'));
    //         document.querySelector(menuLink.getAttribute('href')).scrollIntoView({ 
    //             behavior: 'smooth'
    //         });
    //return false;
    //     });
    //    });
    // .addEventListener ('click', function () {
    //     console.log ('ok');
    //     return false;
    // document.querySelector('#characters').scrollIntoView({ 
    //    
    //   });
    


    window.addEventListener('scroll', handleScroll);

    // Function to handle scroll event
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

   

// BURGER MENU
const openMenuBtn = document.querySelector('.open-menu');// ---
const closeMenuBtn = document.querySelector('.close-menu');//x
const burgerContent = document.getElementById('burger-menu');

//const body = document.querySelector('.body');  //to control the scroll of the elements in the body
//let unlock = true; // for avoiding double clicks
function iconChange () {
    closeMenuBtn.classList.remove('visible');
    closeMenuBtn.classList.add('hidden');
    openMenuBtn.classList.add('visible');
}

function open () {
    burgerContent.style.display = 'block';
    openMenuBtn.classList.remove('visible');
    openMenuBtn.classList.add('hidden');
    closeMenuBtn.classList.remove('hidden');
    console.log('ok');
};
openMenuBtn.addEventListener('click', open)
closeMenuBtn.addEventListener('click', close);

function close () {
    burgerContent.style.display = "none";
    console.log('ok1');
        //conseillé par ai
    // const currentUrl = window.location.href.split('#')[0];
    // window.location.href = currentUrl;
};

//liens
const menuLinks = document.querySelectorAll('.link');
if (menuLinks.length > 0) {
    for (let index = 0; index < menuLinks.length; index++ ) {
        const menuLink = menuLinks[index];
        menuLink.addEventListener('click', function (e) {
            const linkName = menuLink.getAttribute('href').replace ('#','');
            const curLink = document.getElementById(linkName);
            openLink(curLink); // Call the function correctly
            console.log('ok2');
        });
      }
    }
    
    function openLink(curLink) {
        // Scroll smoothly to the target element within the page
        if (curLink) {
          curLink.scrollIntoView({ behavior: "smooth" });
          close();
          console.log('ok3');
          iconChange();
            console.log ('ok4');
        }
      }





});



   
  
