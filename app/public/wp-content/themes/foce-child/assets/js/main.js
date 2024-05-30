// const sectionObserver = new IntersectionObserver(entries => {
//     // Loop over the entries
//     entries.forEach(entry => {
//       // If the element is visible
//       if (entry.isIntersecting) {
//         // Add the animation class
//         entry.target.classList.add('fadeInUpSection');
//         return;
//       }
//       });
//   });
  
// // Select all section elements and observe each one
// const sectionElements = document.querySelectorAll('section');
// if (sectionElements.length) {
//   sectionElements.forEach(section => sectionObserver.observe(section));
// } else {
//   console.error('No section elements found in the DOM.');
// }
//DOMcontentloaded
// document.addEventListener('DOMContentLoaded', ready);
// function ready(event) {
//     console.log('DOMContentLoaded')
// };

// //creation des spans pour chaque mot avec DOM
// document.addEventListener('DOMContentLoaded', function() {
//     // Select all h2 and h3 elements
//     const headers = document.querySelectorAll('h2, h3');

//     // Iterate over each header element
//     headers.forEach(header => {
//         // Split the text content of the header into words
//         const words = header.textContent.split(' ');

//         // Wrap each word in a span
//         const wrappedWords = words.map(word => {
//             const wordSpan = document.createElement('span');
//             wordSpan.textContent = word;
//             return wordSpan.outerHTML;
//         }).join(' ');

//         // Replace the header's inner HTML with the new content
//         header.innerHTML = wrappedWords;
//     });
// });


// // Observer
// // Settings
// let options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 1.0, 
// };

// // Callback function
// let callback = function(entries, observer) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             console.log('find', entry);
//             entry.target.classList.add('animated-header');
//             observer.unobserve(entry.target);
//         }
//     });
// };

// // Observer
// let observer = new IntersectionObserver(callback, options);

// // Choosing the elements we will observe
// let targets = document.querySelectorAll('.span'); // Ensure elements with the class 'span' exist
// targets.forEach(target => {
//    observer.observe(target);
// });





document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded');

   const menuLinks = document.querySelectorAll('.main-navigation a'); 
   console.log(menuLinks);
   menuLinks.forEach (menuLink => {
    console.log(menuLink);
    menuLink.addEventListener('click', function () {
        console.log(menuLink.getAttribute('href'));
        document.querySelector(menuLink.getAttribute('href')).scrollIntoView({ 
            behavior: 'smooth'
        });
        //return false;
    });
   });
    // .addEventListener ('click', function () {
    //     console.log ('ok');
    //     return false;
    // document.querySelector('#characters').scrollIntoView({ 
    //    
    //   });

    // Select all h2 and h3 elements
    const headers = document.querySelectorAll('h2, h3');

    // Iterate over each header element
    headers.forEach(header => {
        // Split the text content of the header into words
        const words = header.textContent.split(' ');

        // Wrap each word in a span
        const wrappedWords = words.map(word => {
            const wordSpan = document.createElement('span');
            wordSpan.textContent = word;
            wordSpan.classList.add('span'); // Add the class 'span' to each word span
            return wordSpan.outerHTML;
        }).join(' ');

        // Replace the header's inner HTML with the new content
        header.innerHTML = wrappedWords;
    });

//     // Observer settings
//     let options = {
//         root: null,
//         rootMargin: "0px",
//         threshold: 1.0, 
//     };

//     // Callback function
//     let callback = function(entries, observer) {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 console.log('find', entry);
//                 entry.target.classList.add('animated-header');
//                 observer.unobserve(entry.target);
//             }
//         });
//     };

//     // Initialize observer
//     let observer = new IntersectionObserver(callback, options);

//     // Choosing the elements we will observe
//     let targets = document.querySelectorAll('.span');
//     if (targets.length) {
//         targets.forEach(target => observer.observe(target));
//     } else {
//         console.error('No elements with the class "span" found in the DOM.');
//     }
 });
