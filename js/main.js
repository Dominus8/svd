let swiperTop = new Swiper('.swiper-top', {
    // Optional parameters
    effect: 'fade',
    // slidesPerView: 1,
    direction: 'vertical',
    loop: false,
    mousewheel: true,
    allowTouchMove: true,

    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // }
});

let SwiperBot = new Swiper('.swiper-bot', {
    // Optional parameters
    // slidesPerView: 1,
    direction: 'vertical',
    loop: false,
    mousewheel: true,

    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // }
});

swiperTop.controller.control = SwiperBot;
SwiperBot.controller.control = swiperTop;

$('.tooslide1').click(function(e) {

    e.preventDefault();
    $(".nav .nav_el--active").removeClass('nav_el--active');
    $(this).addClass('nav_el--active');
    swiperTop.slideTo($('.about-st').index(), 700, false);
});

$('.tooslide2').click(function(e) {
    e.preventDefault();
    $(".nav .nav_el--active").removeClass('nav_el--active');
    $(this).addClass('nav_el--active');
    swiperTop.slideTo($('.we_can-st').index(), 700, false);
});

$('.tooslide3').click(function(e) {
    e.preventDefault();
    $(".nav .nav_el--active").removeClass('nav_el--active');
    $(this).addClass('nav_el--active');
    swiperTop.slideTo($('.services-st').index(), 700, false);
});

$('.tooslide4').click(function(e) {
    e.preventDefault();
    $(".nav .nav_el--active").removeClass('nav_el--active');
    $(this).addClass('nav_el--active');
    swiperTop.slideTo($('.contacts-st').index(), 700, false);
});

$('.tooslide5').click(function(e) {
    e.preventDefault();
    $(".nav .nav_el--active").removeClass('nav_el--active');
    $(this).addClass('nav_el--active');
    swiperTop.slideTo($('.partners-st').index(), 700, false);
});