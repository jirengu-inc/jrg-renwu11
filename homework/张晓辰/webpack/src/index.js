var $ = require('./lib/jquery.min');
var Carousel = require('./app/carousel')
var GoTop = require('./app/gotop')
var WaterFallLayout =require('./app/waterfall')

new GoTop($('.container'))

Carousel.init($('.carousel'))

new WaterFallLayout()