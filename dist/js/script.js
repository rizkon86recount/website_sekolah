// Navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
 

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};


// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// slide data pendidik
$(document).ready(function() {

    $('.containerCarousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
centerMode: true,
    variableWidth: true, 
    dots: false,
    speed: 400,
    autoplay: false,  
    autoplaySpeed: 5000,
    easing: 'linear',
    arrows: true,
    fade: false,
    pauseOnHover: true, 
    swipe:true,
});
});