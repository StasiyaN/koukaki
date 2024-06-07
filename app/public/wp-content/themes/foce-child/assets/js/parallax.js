document.addEventListener('DOMContentLoaded', function () {

// // Select the video and logo elements
// const banner = document.getElementById('banner');
// const bannerVideo = document.querySelector('.banner-video');
// const logoImage = document.querySelector('.logo-img');
// console.log(bannerVideo);
// console.log(logoImage);

// banner.addEventListener ('scroll', function () {
//     var y = banner.scrollY;
//     bannerVideo.style.bottom = y * 0.5 + 'px';
//     logoImage.style.bottom = y * -1.2 + 'px';
// });



const banner = document.getElementById('banner');
const videoContainer = banner.querySelector('.banner-video');
const logo = banner.querySelector('.logo-img');
const scrollY = window.scrollY; // Initial scroll position

window.addEventListener('scroll', function() {
  const newScrollY = window.scrollY; // Update scroll position
  const movementRatio = (newScrollY - scrollY) / window.innerHeight; // Calculate movement ratio
  videoContainer.style.transform = `translateY(${movementRatio *100}px)`; // Apply parallax effect with a multiplier
  logo.style.transform = `translateY(${movementRatio * 180}px)`; // Apply parallax effect with a multiplier
  scrollY = newScrollY; // Update scrollY for next scroll event
});


});
