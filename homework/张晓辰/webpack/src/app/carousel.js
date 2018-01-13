define(['../lib/jquery.min.js'], function ($) {
    var Carousel = (function () {
        function _Carousel($node) {
            this.$node = $node
            this.init()
            this.bind()
        }
        
        _Carousel.prototype = {
            init: function () {
                var $ct = this.$ct = this.$node.find('.ct')
                var $imgs = this.$imgs = this.$node.find('.ct li')
                var $preBtn = this.$preBtn = this.$node.find('.pre')
                var $nextBtn = this.$nextBtn = this.$node.find('.next')
                var $bullets = this.$bullets = this.$node.find('.bullet > li')
                
                this.imgWidth = $ct.find('img').width()
                this.imgCount = $ct.find('img').length
                this.imgIdx = 0
                this.isAnimate = false
                
                $ct.append($imgs.first().clone())
                $ct.prepend($imgs.last().clone())
                $ct.width((this.imgCount + 2) * this.imgWidth)
                $ct.css('margin-left', -this.imgWidth)
            },
            bind: function () {
                var that = this
                setInterval(function () {
                    that.skip(that.imgIdx + 1)
                }, 2000)
                
                this.$preBtn.click(function () {
                    that.skip(that.imgIdx - 1)
                })
                this.$nextBtn.click(function () {
                    that.skip(that.imgIdx + 1)
                })
                this.$bullets.click(function () {
                    var index = $(this).index()
                    that.skip(index)
                })
            },
            skip: function (index) {
                var that = this
                if (this.isAnimate) return
                this.isAnimate = true
                this.$ct.animate({
                    marginLeft: -this.imgWidth * (index + 1)
                }, function () {
                    if (index === that.imgCount) {
                        index = 0
                        that.$ct.css('margin-left', -that.imgWidth)
                    } else if (index < 0) {
                        index = that.imgCount - 1
                        that.$ct.css('margin-left', -that.imgWidth * that.imgCount)
                    }
                    that.imgIdx = index
                    that.setBullet()
                    that.isAnimate = false
                })
            },
            setBullet: function () {
                this.$bullets.removeClass('active')
                    .eq(this.imgIdx)
                    .addClass('active')
            }
        }
        
        return {
            init: function ($nodes) {
                $nodes.each(function (index, $node) {
                    new _Carousel($($node))
                })
            }
        }
    })()
    
    return Carousel
})