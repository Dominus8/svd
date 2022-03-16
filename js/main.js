let swiperpartners425 = new Swiper('.swiper-partners425', {
    // Optional parameters

    speed: 700,
    // slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
    spaceBetween: 10,



    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

let swiperTop = new Swiper('.swiper-top', {
    // Optional parameters
    effect: 'fade',
    speed: 700,
    // slidesPerView: 1,
    direction: 'vertical',
    loop: false,
    mousewheel: true,
    allowTouchMove: true,
    simulateTouch: false,

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
    speed: 700,
    simulateTouch: false,

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


swiperTop.on('activeIndexChange', function() {

    if (swiperTop.activeIndex == 0) {
        $(".nav .nav_el--active").removeClass('nav_el--active');
        $('.tooslide1').addClass('nav_el--active');
    };
    if (swiperTop.activeIndex == 1) {
        $(".nav .nav_el--active").removeClass('nav_el--active');
        $('.tooslide2').addClass('nav_el--active');
    };
    if (swiperTop.activeIndex == 2) {
        $(".nav .nav_el--active").removeClass('nav_el--active');
        $('.tooslide3').addClass('nav_el--active');
    };
    if (swiperTop.activeIndex == 3) {
        $(".nav .nav_el--active").removeClass('nav_el--active');
        $('.tooslide4').addClass('nav_el--active');
    };
    if (swiperTop.activeIndex == 4) {
        $(".nav .nav_el--active").removeClass('nav_el--active');
        $('.tooslide5').addClass('nav_el--active');
    };
});

$('#ico_item1').click(function() {
    $('.services_top-subtitle').empty();
    $('.services_top-subtitle').html('<span>Сварочные работы на Вашем объекте или в дороге:</span> <br><br> Осуществляем сварку на вашем объекте(обычную, аргонную, газосварку).Не выполняем сварочные работы по топливным бакам.');
    $('.rhomb').removeClass('rhomb--active')
    $(this).addClass('rhomb--active');
});
// $('#ico_item1').onclick(function() {
//     $('.services_top-subtitle').empty();
//     $('.services_top-subtitle').html('<span>Сварочные работы на Вашем объекте или в дороге</span><br><br>Осуществляем сварку на вашем объекте (обычную, аргонную, газосварку). Не выполняем сварочные работы по топливным бакам.');
// });

$('#ico_item3').click(function() {
    $('.services_top-subtitle').empty();
    $('.services_top-subtitle').html('<span>Диагностика и ремонт электрооборудования и слесарные работы на грузовом автотранспорте:</span><br><br>Ремонт и диагностика грузового транспорта марки: Scania/Man/Mercedes/Daf/КаМаз. Обслуживание систем SCR (отключение мочивины), обслуживание ABS (отключение АБС на Scania/Камаз)');
    $('.rhomb').removeClass('rhomb--active');
    $(this).addClass('rhomb--active');
});
// $('#ico_item3').mouseout(function() {
//     $('.services_top-subtitle').empty();
//     $('.services_top-subtitle').html('<span>Сварочные работы на Вашем объекте или в дороге</span><br><br>Осуществляем сварку на вашем объекте (обычную, аргонную, газосварку). Не выполняем сварочные работы по топливным бакам.');
// });

$('#ico_item5').click(function() {
    $('.services_top-subtitle').empty();
    $('.services_top-subtitle').html('<span>Помощь в оформлении пропуска МКАД:</span><br><br> Наши специалисты осуществляют помощь в прохождении техосмотра, проконсультируют по регистрации в системе РНИИС а так же в оформлении пропуска МКАД.');
    $('.rhomb ').removeClass('rhomb--active');
    $(this).addClass('rhomb--active');
});
// $('#ico_item5').mouseout(function() {
//     $('.services_top-subtitle').empty();
//     $('.services_top-subtitle').html('<span>Сварочные работы на Вашем объекте или в дороге</span><br><br>Осуществляем сварку на вашем объекте (обычную, аргонную, газосварку). Не выполняем сварочные работы по топливным бакам.');
// });

$('#ico_item8').click(function() {
    $('.services_top-subtitle').empty();
    $('.services_top-subtitle').html('<span>Выездная замена стекла:</span><br><br> Замена стекла без заезда в автосервис! Меняем лобовые стекла и стекла на спецтехнике в удобное для Вас время.');
    $('.rhomb ').removeClass('rhomb--active');
    $(this).addClass('rhomb--active');
});

$('#ico_item6').click(function() {
    $('.services_top-subtitle').empty();
    $('.services_top-subtitle').html('<span>Выездная замена РВД (рукавов высокого давления):</span><br><br> Наши специалисты изготовят РВД любой сложности у Вас на объекте по Вашему образцу или заказу. Изготовим РВД за место трубопроводов пришедших в негодность и требующие замены, новые магистрали из РВД, гибкие и долговечные, легки при следующих заменах.');
    $('.rhomb ').removeClass('rhomb--active');
    $(this).addClass('rhomb--active');
});

$('#ico_item9').click(function() {
    $('.services_top-subtitle').empty();
    $('.services_top-subtitle').html('<span>Установка дополнительного оборудования и систем ГЛОНАСС:</span><br><br> Установка ТАХОГРАФА, раций, автономных отопителей, дополнительного освещения, видеофиксации а так же подключение к системам ГЛОНАСС по партнерской программе на базе Wialon.');
    $('.rhomb ').removeClass('rhomb--active');
    $(this).addClass('rhomb--active');
});

$('#ico_item4').click(function() {
    $('.services_top-subtitle').empty();
    $('.services_top-subtitle').html('<span>Диагностика и Ремонт электрооборудования и слесарные работы на спецтехнике:</span><br><br> Ремонт и диагностика ДСТ марки: Caterpillar/Kamatsu/Ammann/JCB/Volvo');
    $('.rhomb ').removeClass('rhomb--active');
    $(this).addClass('rhomb--active');
});

$('#ico_item2').click(function() {
    $('.services_top-subtitle').empty();
    $('.services_top-subtitle').html('<span>Выездной Шиномонтаж (13-28 диаметр):</span><br><br> Наши специалисты используют современное оборудование, отремонтируют прокол любой сложности, отбалансируют и переобуют Ваше транспортное средство. Используем домкраты высокой тоннажности, груженый автомобиль не помеха!!! Осуществляем поставку автошин при необходимости!');
    $('.rhomb ').removeClass('rhomb--active');
    $(this).addClass('rhomb--active');
});

$('#ico_item7').click(function() {
    $('.services_top-subtitle').empty();
    $('.services_top-subtitle').html('<span>Ремонт радиаторов охлаждения легковых и грузовых автомобилей:</span><br><br> Наш многолетний опыт работы позволяет гарантировать Вам ремонт радиаторов и интеркулеров любой сложности в кратчайшие сроки, качественно!');
    $('.rhomb ').removeClass('rhomb--active');
    $(this).addClass('rhomb--active');
});