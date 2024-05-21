// 1st swiper slider js
var swiper = new Swiper(".card_slider", {
    slidesPerView: 2.2,
    spaceBetween: 30,
    autoplay: {
        delay: 1700,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//  2nd swiper slider js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//  script for artists section
var swiper = new Swiper(".myyySwiper", {
    slidesPerView: 6,
    spaceBetween: 35,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
