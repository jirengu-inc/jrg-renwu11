define(['carousel', 'waterfall', 'goTop'], function (Carousel, Waterfall, GoTop) {
    new Carousel({
        element: $('#head-carousel'),
        height: 720,
        autoplay: true,
        interval: 4000,
        indicator: "always",
        type: "transform",

    });

     new Waterfall({
        container: $("#protfolio .items-wrap"),
        containerWidth: 900,
        waterfallColumn: 3,
        gutterX: 20,
        gutterY: 20,
        trigger: "click",
        triggerBtn: $("#protfolio .trigger"),
        pageCount : 6,
    });

    new GoTop({
        element: $("#go-top")
    })

})