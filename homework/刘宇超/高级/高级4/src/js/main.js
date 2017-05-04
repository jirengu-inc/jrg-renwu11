requirejs.config({
    baseUrl: 'src/js/lib',
    paths: {
        app: '../app',
        jquery: 'jquery-3.2.1.min',
        carousel: '../widget/carousel',
        waterfall: '../widget/waterfall',
        exposure: '../widget/exposure',
        goTop: '../widget/goTop'
    }
})

requirejs(['app/index'])