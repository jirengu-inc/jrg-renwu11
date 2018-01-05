# 企业网站(PC端)

## 预览地址： https://yanggolddragon.github.io/requirejs/src/

## 技术栈： html5+ css3 +  + jQuery + 模块化(requirejs)

## 项目说明：
1. 全屏轮播的原理是利用（left：-width * num），width的宽度是整个屏幕的宽度。有自动定时切换图片，点击切换图片，暂停切换图片等功能。
2. 返回顶部的功能是利用窗口的高度和滚动条的高度，当滚动条的高度大于窗口的高度时，GoTop按钮出现，点击将滚动条的高度置为0，GoTop按钮消失。
3. 使用jQuery的jsonp进行跨域，获取新浪微博的数据接口，然后利用瀑布流的方式排版布局。
