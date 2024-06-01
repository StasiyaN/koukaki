document.addEventListener('DOMContentLoaded', function () {


    let swiper = new Swiper ('.swiper', {
        grabCursor: true,
        loop: true,
        loopedSlides: 2,
        centeredSlides: true,
        slidesPerView: 3,
        
        pagination: {
            el: '.swiper-pagination',
        },
        effect: "coverflow",
        coverflowEffect: {
            slideShadows: false,
            rotate: 65,
            stretch: 0,
            depth: 80,
            modifier: 1,
        },

    })

 
});

