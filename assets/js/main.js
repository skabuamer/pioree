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

/*----- GLASS BG MARGIN JS STARTS HERE -----*/
const containers = document.querySelectorAll(".container");
const glassBgs = document.querySelectorAll(".content-bg");
const glassBgs2 = document.querySelectorAll(".content-bg-2");

containers.forEach((container) => {
    glassBgs.forEach((glassBg) => {
        glassBg.style.paddingLeft = container.getBoundingClientRect().left + 12 + "px";
        glassBg.style.marginLeft = -(container.getBoundingClientRect().left + 12) + "px";
    });

    glassBgs2.forEach((glassBg) => {
        glassBg.style.paddingRight = container.getBoundingClientRect().left + 12 + "px";
        glassBg.style.marginRight = -(container.getBoundingClientRect().left + 12) + "px";
    });
});
/*----- GLASS BG MARGIN JS ENDS HERE -----*/
