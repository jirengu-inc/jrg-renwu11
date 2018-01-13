define(function () {
    function GoTop(ct){
        this.ct = ct
        this.target = this.createNode(this.ct)
        this.bindEvent(this.target)
    }
    GoTop.prototype = {
        createNode: function(ct){
            var node = document.createElement('div')
            node.classList.add('go-top')
            node.innerText = '返回顶部'
            ct[0].appendChild(node)
            return node
        },
        bindEvent: function (e) {
            e.addEventListener('click', function () {
                window.scroll(0, 0)
            })
        }
    }
    
    return GoTop
})