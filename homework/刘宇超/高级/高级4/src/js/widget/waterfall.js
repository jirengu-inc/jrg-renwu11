define(['jquery', 'exposure'], function($, Exposure){
    function Waterfall(options){
        var defaultOptions = {
            pageCount : 10,
            curPage : 1,
        }

        this.options = Object.assign({}, defaultOptions, options);
        this.colwidth = (this.options.containerWidth - (this.options.gutterX * (this.options.waterfallColumn))) / this.options.waterfallColumn;
        this.itemArr = [];
        for(let i=0; i<this.options.waterfallColumn; i++){
            this.itemArr.push(0);
        }

        this.init();
    }

    Waterfall.prototype.init = function(){
        var lock;
        var _this = this;
        this.options.container.width(this.options.containerWidth);
        this.checkShow();
        if(this.options.trigger === "scroll"){
            $(window).on("scroll", function(){
                if(lock){
                    clearTimeout(lock);
                }
                lock = setTimeout(function(){
                    _this.checkShow();
                },100)
            })
        }else if(this.options.trigger === "click"){
            this.options.triggerBtn.on("click", function () {
                _this.getImg(_this.options.pageCount, _this.options.curPage)
            })
        }
    }

    Waterfall.prototype.checkShow = function(){
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        var containerHeight = this.options.container.height();
        if(containerHeight < windowHeight + scrollTop + 100){
            this.getImg(this.options.pageCount, this.options.curPage);
        }
    }

    Waterfall.prototype.getImg = function(count, cur){
        var _this = this;
        $.ajax({
            url: 'http://platform.sina.com.cn/slide/album_tech',
            dataType: 'jsonp',
            jsonp:"jsoncallback",
            data: {
                app_key: '1271687855',
                num: count,
                page: cur,
            },
        }).done(function(res){
            if(res && res.status && res.status.code === "0"){
                _this.setImg(res.data);
                _this.options.curPage += 1;
            }else{
                console.log("error");
            }
        })
    }

    function showImg(args){
        args.$img.attr("src", args.$img.attr("data-src"));

        args.$img.on("load", function(){
            args.handler.call(args.obj, args.args);
        })
    }

    Waterfall.prototype.setImg = function(imgs){
        var _this = this;
        var fuc = this.waterfallPlace;
        for(let i of imgs){
            var item = this.createImg(i);
            var img = item.find(".lazy-load");
            this.appendImg(item);
            var demo = new Exposure({
                element: img,
                callback: showImg,
                callbackArgs: {
                    $img: img,
                    obj: _this,
                    handler: fuc,
                    args: item
                },
                strict: false,
            });
        }
    }

    Waterfall.prototype.waterfallPlace = function(item){

        var minValue = Math.min.apply(null, this.itemArr);
        var minIndex = this.itemArr.indexOf(minValue);
        item.css({
            top: minValue,
            left: (this.colwidth + this.options.gutterX) * minIndex
        })
        this.itemArr[minIndex] = this.itemArr[minIndex] + item.outerHeight(true)-this.options.gutterY;
        this.options.container.height(Math.max.apply(null, this.itemArr))
    }

    Waterfall.prototype.createImg = function(img){
        var item = ''
        item += '<li class="item">';
        item += ' <a href="'+ img.url +'" class="link"><img class="lazy-load" data-src="' + img.img_url + '"alt=""></a>';
        item += ' <h4 class="header">'+ img.short_name +'</h4>';
        item += '<p class="desp">'+img.short_intro+'</p>';
        item += '</li>';

        item = $(item).width(this.colwidth)
            .css("margin", this.options.gutterY + "px " + this.options.gutterX/2 + "px");
        return item;
    }

    Waterfall.prototype.appendImg = function(item){
        this.options.container.append(item)
    }

    return  Waterfall;
    // function Exposure(options){
    //     let defaultOptions = {
    //         onlyOne: true,
    //         strict: true
    //     };
    //     let _this = this;
    //     this.options = $.extend({}, defaultOptions, options);
    //     this.init();
    // }
    //
    // Exposure.prototype = {
    //     init: function(){
    //         let _this = this;
    //         this.options.element.each(function(){
    //             let $node = $(this);
    //             _this.isShow($node);
    //             $(window).on("scroll", function(){_this.isShow($node)});
    //         })
    //     },
    //
    //     isShow: function($node){
    //         if(this.options.onlyOne && this.isloaded($node)){
    //             return;
    //             //        若加载过则直接退出，否则继续
    //         }else if(this.isVisible($node)){
    //
    //             this.options.callback(this.options.callbackArgs);
    //         }
    //     },
    //
    //     isVisible: function($node){
    //         var offsetTop = $node.offset().top;
    //         var scrollTop = $(window).scrollTop();
    //         var windowHeight = $(window).height();
    //         var nodeHeight = $node.height();
    //         if(offsetTop < scrollTop + windowHeight){
    //             if(this.options.strict && offsetTop + nodeHeight < scrollTop){
    //                 return false;
    //             }
    //
    //             if(this.options.onlyOne){
    //                 $node.addClass("loaded");
    //                 //给在视区内的元素添加一个loaded标记
    //             }
    //             return true;
    //         }
    //         return false;
    //     },
    //
    //     isloaded: function($node){
    //         return $node.not(".loaded").length === 0;
    //     },
    // }



    // var waterfall = new Waterfall({
    //     container: $("#container"),
    //     containerWidth: 900,
    //     waterfallColumn: 3,
    //     gutterX: 20,
    //     gutterY: 20,
    //     trigger: "click",
    //     triggerBtn: $("#trigger")
    // });
})