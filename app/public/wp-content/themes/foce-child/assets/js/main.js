document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded'); 
    //declaration de variables
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
        event.preventDefault();//cancellin defaut behaviour of the link redirection

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