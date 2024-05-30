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

// CREATION DE SPANS 
    // Select all h2 and h3 elements
    const headers = document.querySelectorAll('h2, h3');

    let wrappedWords;

    // Function to add spans to headers
    function addSpans() {
        headers.forEach(header => {
            const words = header.textContent.split(' ');
            wrappedWords = words.map(word => {
                const wordSpan = document.createElement('span');
                wordSpan.textContent = word;
                wordSpan.classList.add('span'); // Add the class 'span' to each word span
                return wordSpan.outerHTML;
            }).join(' ');
            header.innerHTML = wrappedWords;
        });
    }




    addSpans();
    console.log(wrappedWords);
   
    
});