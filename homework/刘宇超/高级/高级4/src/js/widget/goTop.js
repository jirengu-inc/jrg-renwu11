define(['jquery'], function ($) {
    function GoTop(options){
        var defaultOptions = {

        };
        this.options = $.extend({}, defaultOptions, options);

        this.init();
    }

    GoTop.prototype = {
        init: function(){
            var _this = this;

            this.options.element.on("click", function () {
                $(window).scrollTop(0);
            })

            $(window).on("scroll", function(){
                _this.checkShow();
            })

            this.checkShow()
        },

        checkShow: function() {
            var _this = this;

            if($(window).scrollTop() < 2 * $(window).height()){
                _this.options.element.hide();
            }else{
                _this.options.element.show();
            }
        }
    }

    return GoTop;
})