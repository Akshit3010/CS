$(document).ready(function() {

    $('.bxslider').bxSlider({
        // mode: 'fade', 
        // easing: 'swing',
        moveSlides: 1,
        slideMargin: 0,
        infiniteLoop: true,
        minSlides: 1,
        maxSlides: 1,
        speed: 1000,
        auto: true,
        autoControls: true,
    });

    if ($(".swiper-container").hasClass("team-member-slider")) {
        let swiper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            allowTouchMove: false,
            loop: true,
            centeredSlides: true,
            slideToclickedslide: true,
            effect: "coverflow",
            grabcursor: true,
            autoplay: false,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            coverflow: {
                stretch: 100,
                depth: 200,
                modifier: 1,
                slideShadows: false,
            },
            breakpoints: {
                767: {
                    slidesPerView: 1,
                    centeredSlides: false,
                    effect: "slide"
                }
            }
        })
    }

    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    })

    $("#news-slider").owlCarousel({
        items: 3,
        itemsDesktop: [1119, 3],
        itemDesktopSmall: [599, 1],
        pagination: false,
        navigationText: false,
        autoPlay: true
    });

})


function toggle() {
    let header1 = document.getElementById("header1")
    header1.classList.toggle('active')
}

const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    const navMenu = document.getElementById('header1')
        // When we click on each nav__link, we remove the active class
    navMenu.classList.remove('active')
	

}
navLink.forEach(n => n.addEventListener('click', linkAction))
