define(['jquery'], function ($) {
    var load = (function () {
        function _load($ct) {
            this.ct = $ct;
            this.init();
        };

        _load.prototype = {
            constructor: _load,
            init: function () {
                var _this = this;
                this.isGetDate = true;    //z状态锁，监控数据是否到来，默认数据到来，数据一到，状态锁变为true
                this.curPage = 1;              //初始化当前页数
                this.perPagaCount = 3;              //每一页的数量
                this.colLength = parseInt(this.ct.find('ul').width() / this.ct.find('li').outerWidth(true));     //计算列数
                this.nodeWidth = this.ct.find('ul li').outerWidth(true);   //每个li标签的宽度
                this.nodeHeightArr = [];             //存放每一列的高度
                for(var i=0; i<this.colLength; i++){     //初始化每一列的高度
                    this.nodeHeightArr[i] = 0
                }

                this.renderDate();

                this.ct.find('#more').on('click',function () {
                    if(_this.isGetDate){
                        _this.renderDate();
                    }
                });
            },
            renderDate: function () {
                console.log('开始渲染')
                var _this = this;
                this.getData(function (newsList) {
                    _this.isGetDate = true;        //数据一来，状态锁变为true
                    $.each(newsList,function (index,news){
                        var node = _this.getNode(news);
                        $(node).find('img').load(function () {
                            _this.ct.find('ul').append(node);
                            _this.waterFall(node);
                        });
                    })
                });
                this.isGetDate = false;          //数据没到，状态锁变为false
            },

            getData: function (jsoncallback) {
                var _this = this;
                $.ajax({
                    url: 'https://platform.sina.com.cn/slide/album_tech',
                    dataType: 'jsonp',
                    jsonp: 'jsoncallback',
                    data: {
                        app_key: '1271687855',
                        page: _this.curPage,
                        num: _this.perPagaCount
                    }
                }).done(function (ret) {
                    if(ret && ret.status && ret.status.code === '0'){
                        jsoncallback(ret.data);
                        _this.curPage++;
                    }
                }).fail(function () {
                    console.log('get data error');
                })
            },

            getNode: function (news) {
                this.html = '';
                this.html += '<li>';
                this.html +=     '<a href="'+news.url+'">';
                this.html +=         '<img src="'+news.img_url+'" alt="">';
                this.html +=         '<h2>'+news.short_name+'</h2>';
                this.html +=         '<p>'+news.short_intro+'</p>';
                this.html +=     '</a>';
                this.html += '</li>';
                return $(this.html);
            },

            waterFall: function (node) {
                var _this = this;
                this.minValue = Math.min.apply(null,_this.nodeHeightArr);
                this.minIndex = this.nodeHeightArr.indexOf(_this.minValue);
                node.css({
                    top: _this.nodeHeightArr[_this.minIndex],
                    left: _this.nodeWidth * _this.minIndex,
                    opacity: 1
                });
                this.nodeHeightArr[this.minIndex] += node.outerHeight(true);
                this.ct.find('ul').height(Math.max.apply(null,_this.nodeHeightArr));
            }
        };

        return {
            start: function ($ct) {
                new _load($ct);
            }
        }

    })();

    return load;
});









