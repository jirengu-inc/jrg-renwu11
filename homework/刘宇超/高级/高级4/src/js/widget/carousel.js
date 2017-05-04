define(['jquery'], function ($) {
    function Carousel(options){
        var defaultOptions = {
            arrow: "hover",
            initialIndex: 1,
            autoplay: true,
            interval: 1000,
            type: "transform",
            indicator: "hover",
        }

        this.options = $.extend({}, defaultOptions, options);
        this.init();

    }

    Carousel.prototype = {
        init: function () {
            this.$element = this.options.element;
            this.change = this.options.initialIndex;
            this.width = this.$element.width();
            this.container = this.$element.find(".carousel-container");
            this.arrow = this.$element.find(".arrow")
            this.arrowLeft = this.$element.find(".arrow-left");
            this.arrowRight = this.$element.find(".arrow-right");
            this.items = this.$element.find(".carousel-item");
            this.indicator = this.$element.find(".carousel-indicator");
            this.indicators = this.$element.find(".carousel-indicators");
            this.itemsLen = this.items.length;
            this.isAnimate = false;

            this.container.height(this.options.height);


            switch(this.options.type){
                case "transform":
                    this.containerWidth = this.width * (this.itemsLen + 2);
                    this.container.width(this.containerWidth);
                    break;

                case "shade":
                    this.containerWidth = this.width;
            }

            this.initItem();
            this.initArrow();
            this.initIndicator();
            this.initAutoplay();
        },

        initItem: function(){

            switch (this.options.type){
                case "transform":
                    this.container.prepend(this.items.last().clone());
                    this.container.append(this.items.first().clone());
                    this.container.css({left: -this.width * this.change});
                    this.container.find(".carousel-item").width(this.width);
                    break;

                case "shade":

                    this.items.css("position", "absolute");
                    this.items.hide();
                    $(this.items[this.change -1]).show();
                    break;
            }


        },

        initArrow: function () {
            var _this = this;
            this.arrowRight.on("click", function(){
                _this.next(1);
            })
            this.arrowLeft.on("click", function(){
                _this.prev(1);
            })

            switch (this.options.arrow){
                case "hover":
                    this.$element.on("mouseenter", function(){
                        _this.arrow.fadeIn();
                    })
                    this.$element.on("mouseleave", function(){
                        _this.arrow.fadeOut();
                    })
                    break;

                case "always":
                    this.arrow.show();
                    break;

                case "never":
                    break;
            }
        },

        initAutoplay: function () {
            var _this = this;
            if(this.options.autoplay === true){
                this.startAutoPlay();

                this.$element.on("mouseenter", function(){
                    _this.stopAutoPlay();
                })
                this.$element.on("mouseleave", function(){
                    _this.startAutoPlay();
                })
            }
        },

        startAutoPlay: function(){
            var _this = this;
            this.autoInterval = setInterval(function(){
                _this.next(1);
            }, this.options.interval)

        },

        stopAutoPlay: function(){
            clearInterval(this.autoInterval);
        },

        initIndicator: function () {
            var _this = this;
            this.indicators.on("click", ".carousel-indicator", function(){
                var len = $(this).parent().children().index(this) + 1 - _this.change;
                if(len > 0){
                    _this.next(len);
                }else if(len < 0){
                    _this.prev(-len);
                }
            })

            this.setBullet();

            switch (this.options.indicator){
                case "hover":
                    this.$element.on("mouseenter", function () {
                        _this.indicators.fadeIn();
                    })
                    this.$element.on("mouseleave", function(){
                        _this.indicators.fadeOut();
                    })
                    break;

                case "always":
                    this.indicators.show();
                    break;

                case "never":
                    break;
            }
        },

        next: function (len) {
            var _this = this;
            if(this.isAnimate){
                return;
            }
            this.isAnimate = true;

            switch (this.options.type){
                case 'transform':
                    this.container.animate({
                        left: -this.width * (_this.change+len)
                    }, function(){
                        _this.change += len;
                        if(_this.change === _this.itemsLen+1) {
                            _this.change = 1;
                            _this.container.css({left: -_this.width})
                        }
                        _this.isAnimate = false;
                        _this.setBullet();
                    })

                    break;

                case 'shade':
                    $(this.items[this.change-1]).fadeOut();
                    this.change += len;
                    if(this.change === this.itemsLen+1){
                        this.change = 1;
                    }
                    $(this.items[this.change-1]).fadeIn();
                    _this.isAnimate = false;
                    _this.setBullet();
                    break;
            }
        },

        prev: function (len) {
            var _this = this;
            if(this.isAnimate){
                return;
            }
            this.isAnimate = true;
            switch (this.options.type){
                case 'transform':
                    this.container.animate({
                        left: -this.width * (_this.change-len)
                    }, function(){
                        _this.change -= len;
                        if(_this.change === 0) {
                            _this.change = _this.itemsLen;
                            console.log()
                            _this.container.css({left: -_this.change * _this.width})
                        }
                        _this.isAnimate = false;
                        _this.setBullet();
                    });
                    break;

                case 'shade':
                    $(this.items[this.change-1]).fadeOut();
                    this.change -= len;
                    if(this.change === 0){
                        this.change = _this.itemsLen;
                    }
                    $(this.items[this.change-1]).fadeIn();
                    _this.isAnimate = false;
                    _this.setBullet();
                    break;
            }
        },

        setBullet: function () {
            this.indicator.removeClass("active");
            $(this.indicator[this.change-1]).addClass("active");
        }
    }

    // function Carousel(options){
    //     var defaultOptions = {
    //         arrow: "hover",
    //         initialIndex: 0,
    //         autoplay: false,
    //         interval: 1000,
    //         type: "transform",
    //         indicator: "hover",
    //     }
    //
    //     this.options = $.extend({}, defaultOptions, options);
    //     this.init();
    //
    // }
    //
    // Carousel.prototype = {
    //
    //     init: function(){
    //         this.$element = this.options.element;
    //         this.change = this.options.initialIndex;
    //         this.lock = true;
    //         this.width = this.$element.width();
    //         this.container = this.$element.find(".carousel-container");
    //         this.arrow = this.$element.find(".arrow")
    //         this.arrowLeft = this.$element.find(".arrow-left");
    //         this.arrowRight = this.$element.find(".arrow-right");
    //         this.items = this.$element.find(".carousel-item");
    //         this.indicator = this.$element.find(".carousel-indicator");
    //         this.indicators = this.$element.find(".carousel-indicators");
    //         this.itemsLen = this.items.length;
    //
    //         this.container.height(this.options.height);
    //         console.log(this.options)
    //
    //         this.initItem();
    //         this.initIndicator();
    //         this.initAutoPlay();
    //         this.initArrow();
    //
    //     },
    //
    //     initItem: function(){
    //         var _this = this;
    //         switch(this.options.type){
    //             case "shade":
    //                 this.items.hide();
    //                 this.setActiveItem();
    //                 $(this.items[this.change]).show();
    //                 break;
    //             case "transform":
    //                 this.carouselTransform();
    //                 var inittimer = setInterval(function(){
    //                     _this.items.css("transition", ".4s ease-in-out");
    //                     clearInterval(inittimer);
    //                 },0)
    //                 break;
    //         }
    //     },
    //
    //     initAutoPlay: function(){
    //         var _this = this;
    //         if(this.options.autoplay === true){
    //             this.startAutoPlay();
    //
    //             this.$element.on("mouseenter", function(){
    //                 _this.stopAutoPlay();
    //             })
    //             this.$element.on("mouseleave", function(){
    //                 _this.startAutoPlay();
    //             })
    //         }
    //     },
    //
    //     initIndicator: function(){
    //         var _this = this;
    //         this.indicators.on("click", ".carousel-indicator", function(){
    //             if(!_this.lock){
    //                 return ;
    //             }
    //             _this.lock = false;
    //             _this.change = $(this).parent().children().index(this);
    //             _this.carouselTransform();
    //         })
    //
    //         switch (this.options.indicator){
    //             case "hover":
    //                 this.$element.on("mouseenter", function () {
    //                     _this.indicators.fadeIn();
    //                 })
    //                 this.$element.on("mouseleave", function(){
    //                     _this.indicators.fadeOut();
    //                 })
    //                 break;
    //
    //             case "always":
    //                 this.indicators.show();
    //                 break;
    //
    //             case "never":
    //                 break;
    //         }
    //     },
    //
    //     initArrow: function(){
    //         var _this = this;
    //         this.arrowRight.on("click", function(){
    //             _this.next();
    //         })
    //         this.arrowLeft.on("click", function(){
    //             _this.prev();
    //         })
    //
    //         switch (this.options.arrow){
    //             case "hover":
    //                 this.$element.on("mouseenter", function(){
    //                     _this.arrow.fadeIn();
    //                 })
    //                 this.$element.on("mouseleave", function(){
    //                     _this.arrow.fadeOut();
    //                 })
    //                 break;
    //
    //             case "always":
    //                 this.arrow.show();
    //                 break;
    //
    //             case "never":
    //                 break;
    //         }
    //     },
    //
    //     startAutoPlay: function(){
    //         var _this = this;
    //         this.autoInterval = setInterval(function(){
    //             _this.next();
    //         }, this.options.interval)
    //     },
    //
    //     stopAutoPlay: function(){
    //         clearInterval(this.autoInterval);
    //     },
    //
    //     waitAnimate: function(time){
    //         var _this = this;
    //         var timer = setInterval(function(){
    //             _this.setActiveItem();
    //             _this.lock = true;
    //             clearInterval(timer);
    //         }, time)
    //     },
    //
    //     carouselTransform: function(){
    //         var _this = this;
    //         if(this.container.find(".is-active")[0] === this.items[this.change]){
    //             this.lock = true;
    //             return;
    //         }
    //
    //         switch(this.options.type){
    //             case "shade":
    //
    //                 this.container.find(".is-active").fadeOut(400);
    //                 $(this.items[this.change]).fadeIn(400);
    //                 this.waitAnimate(400);
    //                 break;
    //
    //             case "transform":
    //                 $(this.items[this.change]).addClass("is-active");
    //
    //                 if(this.itemsLen === 2){
    //                     this.items.each(function(){
    //                         var index = _this.items.index(this);
    //                         var relIndex = index-_this.change;
    //                         $(this).css("transform", "translateX(" + relIndex * _this.width + "px)");
    //                     })
    //                 }else{
    //                     this.items.each(function(){
    //                         var index = _this.processIndex(_this.items.index(this), _this.change, _this.itemsLen);
    //                         var relIndex = index-_this.change;
    //                         $(this).css("transform", "translateX(" + relIndex * _this.width + "px)");
    //                     })
    //                 }
    //                 this.waitAnimate(400);
    //                 break;
    //         }
    //     },
    //
    //     setActiveItem: function(){
    //         this.$element.find(".is-active").removeClass("is-active");
    //         $(this.items[this.change]).addClass("is-active");
    //         $(this.indicator[this.change]).addClass("is-active")
    //     },
    //
    //     processIndex: function(index, change, length) {
    //         if (change === 0 && index === length - 1) {
    //             return -1;
    //         } else if (change === length - 1 && index === 0) {
    //             return length;
    //         } else if (index < change - 1 && change - index >= length / 2) {
    //             return length + 1;
    //         } else if (index > change + 1 && index - change >= length / 2) {
    //             return -2;
    //         }
    //         return index;
    //     },
    //
    //     next: function(){
    //         if(!this.lock){
    //             return ;
    //         }
    //         this.lock = false;
    //         if(this.change === this.itemsLen-1){
    //             this.change = 0
    //         }else{
    //             this.change += 1;
    //         }
    //
    //         this.carouselTransform()
    //     },
    //
    //     prev: function(){
    //         if(!this.lock){
    //             return ;
    //         }
    //         this.lock = false;
    //         if(this.change === 0){
    //             this.change = this.itemsLen-1;
    //         }else{
    //             this.change -= 1;
    //         }
    //
    //         this.carouselTransform()
    //     }
    // }



    return Carousel;
})