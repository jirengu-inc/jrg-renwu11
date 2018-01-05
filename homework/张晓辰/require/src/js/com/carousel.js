define(['jquery'], function ($) {
    var carousel = (function () {
        function _carousel(ct) {
            this.ct = $(ct);
            this.init();
            this.bind();
        };

        _carousel.prototype = {
            constructor: _carousel,
            init: function () {
                this.pageCount = this.ct.find('.wrap div').length;
                this.pageWidth = this.ct.find('.wrap img').width();
                this.pageIndex = 0;
                this.pageFirst = this.ct.find('.wrap > div').first().clone();
                this.pageLast = this.ct.find('.wrap > div').last().clone();
                this.isAnimate = false;
                this.ct.find('.wrap').prepend(this.pageLast).append(this.pageFirst).css({width: $('.wrap div').length*this.pageWidth});

            },

            bind: function () {
                var _this = this;
                this.ct.find('.btn').on('click','div',function () {
                    var index = _this.ct.find('.btn > div').index(this);
                    if(index > _this.pageIndex){
                        _this.playNext(index - _this.pageIndex);
                    }else if(index < _this.pageIndex){
                        _this.playPrev(_this.pageIndex - index);
                    }
                })

                this.ct.find('.prev').on('click',function () {
                    _this.playPrev(1);
                });

                this.ct.find('.next').on('click',function () {
                    _this.playNext(1);
                });

                this.playAuto();
            },

            playPrev: function (len) {
                var _this = this;
                if(this.isAnimate === true){
                    return;
                }
                this.isAnimate = true;
                this.ct.find('.wrap').animate({
                    left: '+='+(_this.pageWidth * len)
                },function () {
                    _this.pageIndex -= len;
                    if(_this.pageIndex < 0){
                        _this.ct.find('.wrap').css({
                            left: -_this.pageWidth * _this.pageCount
                        })
                        _this.pageIndex = _this.pageCount - 1;
                    }
                    _this.ct.find('.btn > div').removeClass('active').eq(_this.pageIndex).addClass('active');
                    console.log(_this.pageIndex);
                    _this.isAnimate = false;
                });
            },

            playNext: function (len) {
                var _this = this;
                if(this.isAnimate === true){
                    return;
                }
                this.isAnimate = true;
                this.ct.find('.wrap').animate({
                    left: '-='+(_this.pageWidth * len)
                },function () {
                    _this.pageIndex += len;
                    if(_this.pageIndex === _this.pageCount){
                        _this.ct.find('.wrap').css({
                            left: -_this.pageWidth
                        });
                        _this.pageIndex = 0;
                    }
                    _this.ct.find('.btn > div').removeClass('active').eq(_this.pageIndex).addClass('active');
                    console.log(_this.pageIndex);
                    _this.isAnimate = false;
                });
            },

            playAuto: function () {
                var _this = this;
                var interval = setInterval(function () {
                    _this.playNext(1);
                },2000);
                this.ct.find('.next').on('mouseenter',function () {
                    clearInterval(interval);
                });
                this.ct.find('.next').on('mouseleave',function () {
                    interval = setInterval(function () {
                        _this.playNext(1);
                    },2000);
                });
                this.ct.find('.prev').on('mouseenter',function () {
                    clearInterval(interval);
                });
                this.ct.find('.prev').on('mouseleave',function () {
                    interval = setInterval(function () {
                        _this.playNext(1);
                    },2000);
                });
                this.ct.find('.btn').on('mouseenter',function () {
                    clearInterval(interval);
                });
                this.ct.find('.btn').on('mouseleave',function () {
                    interval = setInterval(function () {
                        _this.playNext(1);
                    },2000);
                });
            }

        };

        return {
            start: function ($ct) {
                $ct.each(function (index, perCt) {
                    new _carousel(perCt);
                });
            }
        };

    })();

    return carousel;
});




