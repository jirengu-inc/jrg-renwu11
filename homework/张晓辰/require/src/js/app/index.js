define(['jquery', 'com/carousel', 'com/goTop', 'com/waterFall'],function ($, carousel, goTop, waterFall) {
    carousel.start($('.carousel'));
    goTop.start($('.go-top'));
    waterFall.start($('.load-container'));
});