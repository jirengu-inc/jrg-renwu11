define(['../lib/jquery.min.js'], function($) {
    function WaterFallLayout() {
        this.init()
        this.load()
        this.bind()
    }
    
    WaterFallLayout.prototype.init = function() {
        this.lineArr = []
        this.waterfallLayoutWidth = $('.waterfall-layout').width()
        this.itemWidth = $('.waterfall-layout .item').outerWidth(true)
        this.lineCount = Math.floor(this.waterfallLayoutWidth / this.itemWidth)
        this.curPage = 1;
        this.length = 10;
        
        for (var i = 0; i < this.lineCount; i++) {
            this.lineArr[i] = 0
        }
        
        this.isArrival = true
    }
    
    WaterFallLayout.prototype.getData = function(callback) {
        var _this = this
        if (!this.isArrival) return
        this.isArrival = false
        $.ajax({
            url: 'https://platform.sina.com.cn/slide/album_tech',
            type: 'get',
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            data: {
                app_key: '1271687855',
                num: _this.length,
                page: _this.curPage
            }
        }).done(function(newsList) {
            if (newsList && newsList.status && newsList.status.code === '0') {
                _this.curPage = _this.curPage + 1
                _this.isArrival = true
                callback(newsList.data)
            } else console.log('获取新闻数据失败')
        })
    }
    
    
    
    WaterFallLayout.prototype.waterfall = function(node) {
        var _this = this
        var nodeHeight = node.outerHeight(true)
        //找出一列中最小的高度，把当前节点定位上去然后加上该节点高度，循环
        var nodeHeight = node.outerHeight(true)
        var lineMinHeight = Math.min.apply(null, _this.lineArr)
        var lineMinIndex = this.lineArr.indexOf(lineMinHeight)
        node.css({
            left: lineMinIndex * _this.itemWidth,
            top: lineMinHeight,
            opacity: 1
        })
        this.lineArr[lineMinIndex] = lineMinHeight + nodeHeight
        $('.waterfall-layout .news-ct').height(Math.max.apply(null, _this.lineArr))
    }
    
    WaterFallLayout.prototype.getNode = function(news) {
        var url = news.url,
            img_url = news.img_url,
            name = news.short_name,
            intro = news.short_intro;
        img_url = img_url.replace(/^http/ig, 'https')
        var node = '<li class="item">'
        node += '<a class="img-ct" href=' + url + '><img src=' + img_url + '></a>'
        node += '<h4 class="header">' + name + '</h4>'
        node += '<p class="desp">' + intro + '</p></li>'
        
        return $(node)
    }
    
    WaterFallLayout.prototype.load = function() {
        var _this = this
        this.getData(function(data) {
            $(data).each(function() {
                var $node = _this.getNode(this)
                $node.find('img').load(function() { //图片加载完成后在放到页面上
                    $(".waterfall-layout .news-ct").append($node)
                    _this.waterfall($node)
                })
            })
        })
    }
    
    
    WaterFallLayout.prototype.bind = function() {
        var _this = this
        $('#load-more').click(function() {
            _this.load()
        })
    }
    
    
    // WaterFallLayout.prototype.isVisible = function(loadMore) {
    //     var top = loadMore.offset().top
    //     if (top < $(window).height() + $(window).scrollTop())
    //         return true;
    //     else
    //         return false;
    // }
    return WaterFallLayout
    
});