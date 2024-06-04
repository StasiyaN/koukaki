document.addEventListener('DOMContentLoaded', function () {

// Select the video and logo elements
let bannerVideo = document.getElementsByClassName('banner-video');
let logoImage = document.querySelector('.banner img');

// Apply simpleParallax to the video element
// new simpleParallax(bannerVideo, {
//     overflow: false,
//     orientation: 'up'
// });

console.log(logoImage);

// Apply simpleParallax to the logo element
new simpleParallax(logoImage, {
    overflow: false,
    orientation: 'down',
    delay: -5 
});


});
    
  
