// let lightbox = new FsLightbox(".about-section__video-popup-btn");

// window.addEventListener("scroll", () => {
//     // Sticky Header
//     document.querySelector("header").classList.toggle("sticky", window.scrollY >= 100);
// });

// /*--------- BACK TO TOP START ---------*/
// window.addEventListener("scroll", () => {
//     document.querySelector(".back__to__top").classList.toggle("active", scrollY > 300);

//     if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
//         document.querySelector(".back__to__top").style.transform = `translateY(-${document.querySelector(".footer-bottom").clientHeight - 20}px)`;
//     } else {
//         document.querySelector(".back__to__top").style.transform = "translateY(0px)";
//     }
// });

// document.querySelector(".back__to__top").addEventListener("click", () => {
//     window.scrollTo(0, 0);
// });
// /*--------- BACK TO TOP END ---------*/

// AOS.init({
//     duration: 1000,
//     once: true,
// });

const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    mousewheel: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

// $(document).ready(function () {
// });

$(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        // nav: true,
        loop: true,
    });
});

$(".owl-carousel").on("mousewheel", ".owl-stage", function (e) {
    if (e.deltaY > 0) {
        $(".owl-carousel").trigger("next.owl");
    } else {
        $(".owl-carousel").trigger("prev.owl");
    }
    e.preventDefault();
});
