requirejs.config({
    baseUrl: 'src/js/lib',
    paths: {
        app: '../app',
        jquery: 'jquery-3.2.1.min',
        carousel: '../widget/carousel',
    }
})

requirejs(['app/index'])