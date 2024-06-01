document.addEventListener('DOMContentLoaded', function () {






     new Swiper ('.swiper', {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
    
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        },
    
        initialSlide: 4,
        spaceBetween: 50,
    
        loop: true,

        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
          },
        loopedSlides: 2,
      });
  


























});