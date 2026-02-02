

$(function () {

    "use strict";

    if (window.innerWidth > 991) {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".about-ma .bg-img",
                start: "top",
                endTrigger: ".about-ma",
                end: "bottom bottom",
                pin: true, 
                pinSpacing: false
            }
        });
    }

    var testim = new Swiper(".testimonials-ds .testim-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 1500,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // 卡片堆叠动画已禁用，使用简单网格布局

    $('.accordion .accordion-item').on('click', function() {
        $(this).addClass("active").siblings().removeClass("active");
    });

});
