document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded'); 
    //burger menu
    document.querySelector('.menu-icon').addEventListener('click', function () {
        this.classList.toggle('active');
        document.querySelector('.burger-menu').classList.toggle('open');
    })


    // // BURGER MENU
    // const openMenuBtn = document.querySelector('.open-menu');// ---
    // const closeMenuBtn = document.querySelector('.close-menu');//x
    // const burgerContent = document.getElementById('burger-menu');
    // //const body = document.querySelector('.body');  //to control the scroll of the elements in the body
    // //let unlock = true; // for avoiding double clicks
    // function iconChange () {
    //     closeMenuBtn.classList.remove('visible');
    //     closeMenuBtn.classList.add('hidden');
    //     openMenuBtn.classList.add('visible');
    // }
    // function open () {
    //     burgerContent.style.display = 'block';
    //     openMenuBtn.classList.remove('visible');
    //     openMenuBtn.classList.add('hidden');
    //     closeMenuBtn.classList.remove('hidden');
    //     console.log('ok');
    // };
    // openMenuBtn.addEventListener('click', open)
    // closeMenuBtn.addEventListener('click', close);
    // function close () {
    //     burgerContent.style.display = "none";
    //     console.log('ok1');
    // };
    //liens
    // const menuLinks = document.querySelectorAll('.link');
    // if (menuLinks.length > 0) {
    //     for (let index = 0; index < menuLinks.length; index++ ) {
    //         const menuLink = menuLinks[index];
    //         menuLink.addEventListener('click', function (e) {
    //             const linkName = menuLink.getAttribute('href').replace ('#','');
    //             const curLink = document.getElementById(linkName);
    //             openLink(curLink); // Call the function correctly
    //             console.log('ok2');
    //         });
    //     }
    // }
    // function openLink(curLink) {
    //     // Scroll smoothly to the target element within the page
    //     if (curLink) {
    //         curLink.scrollIntoView({ behavior: "smooth" });
    //         close();
    //         console.log('ok3');
    //         iconChange();
    //         console.log ('ok4');
    //     }
    // }
});


