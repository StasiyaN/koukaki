document.addEventListener('DOMContentLoaded', function() {
    //declaration de variables menu
    const menuIcon =  document.querySelector('.menu-icon');
    const burgerMenuContent = document.querySelector('.burger-menu');
    const links = burgerMenuContent.querySelectorAll('li a');

    //burger menu
    menuIcon.addEventListener('click', function() {
        menuIcon.classList.toggle('open');
        burgerMenuContent.classList.toggle('active');
        document.body.classList.toggle('lock');
    });

    //liens
    links.forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('open');
            burgerMenuContent.classList.remove('active');
            document.body.classList.remove('lock');
        });
        //*********************************************************************** */
        //transition fluide vers les section
        const anchors = document.querySelectorAll('a[href*="#"]');
        anchors.forEach(anchor => {
            anchor.addEventListener('click', event => {
                event.preventDefault(); //cancellin defaut behaviour of the link redirection
                const blockID = anchor.getAttribute('href').substring(1);//getting rid of the #
                this.getElementById(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });
        
    });
});