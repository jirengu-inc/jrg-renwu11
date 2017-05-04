define(['jquery'], function ($) {
    function Exposure(options){
        let defaultOptions = {
            onlyOne: true,
            strict: true
        };
        let _this = this;
        this.options = $.extend({}, defaultOptions, options);
        this.init();
    }

    Exposure.prototype = {
        init: function(){
            let _this = this;
            this.options.element.each(function(){
                let $node = $(this);
                _this.isShow($node);
                $(window).on("scroll", function(){_this.isShow($node)});
            })
        },

        isShow: function($node){
            if(this.options.onlyOne && this.isloaded($node)){
                return;
                //        若加载过则直接退出，否则继续
            }else if(this.isVisible($node)){

                this.options.callback(this.options.callbackArgs);
            }
        },

        isVisible: function($node){
            var offsetTop = $node.offset().top;
            var scrollTop = $(window).scrollTop();
            var windowHeight = $(window).height();
            var nodeHeight = $node.height();
            if(offsetTop < scrollTop + windowHeight){
                if(this.options.strict && offsetTop + nodeHeight < scrollTop){
                    return false;
                }

                if(this.options.onlyOne){
                    $node.addClass("loaded");
                    //给在视区内的元素添加一个loaded标记
                }
                return true;
            }
            return false;
        },

        isloaded: function($node){
            return $node.not(".loaded").length === 0;
        },
    }

    return Exposure;
})