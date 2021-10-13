(function() {
    var scrollTopBtn = document.querySelector('.back_to_top');
    function scrolling() {
        var scrolled = window.pageYOffset;
        var coords = document.documentElement.clientHeight;
        if (scrolled > coords) {
        scrollTopBtn.classList.add('back_to_top-show');
        }
        if (scrolled < coords) {
        scrollTopBtn.classList.remove('back_to_top-show');
        }
    }
    function backToTop() {
        if (window.pageYOffset > 0) {
        window.scrollBy(0, -40);
        setTimeout(backToTop, 0);
        }
    }
    window.addEventListener('scroll', scrolling);scrollTopBtn.addEventListener('click', backToTop);
})()

var lockRandomScroll = document.querySelector("body");
var headerMenu = document.querySelector(".header_menu");
var headerBurger = document.querySelector(".header_burger");
headerBurger.addEventListener('click', function(e) {
    e.preventDefault();
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    lockRandomScroll.toggleAttribute('lock');
});


