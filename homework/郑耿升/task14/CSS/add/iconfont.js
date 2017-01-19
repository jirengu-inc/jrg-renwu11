;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-jiahao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 112c52.4 0 103.2 10.3 151 30.5 46.2 19.5 87.7 47.5 123.3 83.2C822 261.3 850 302.8 869.5 349c20.2 47.8 30.5 98.6 30.5 151s-10.3 103.2-30.5 151c-19.5 46.2-47.5 87.7-83.2 123.3C750.7 810 709.2 838 663 857.5c-47.8 20.2-98.6 30.5-151 30.5s-103.2-10.3-151-30.5c-46.2-19.5-87.7-47.5-123.3-83.2C202 738.7 174 697.2 154.5 651c-20.2-47.8-30.5-98.6-30.5-151s10.3-103.2 30.5-151c19.5-46.2 47.5-87.7 83.2-123.3C273.3 190 314.8 162 361 142.5 408.8 122.3 459.6 112 512 112M512 52C264.6 52 64 252.6 64 500s200.6 448 448 448 448-200.6 448-448S759.4 52 512 52L512 52z"  ></path>' +
    '' +
    '<path d="M727 470 542 470 542 285c0-16.6-13.4-30-30-30s-30 13.4-30 30l0 185L297 470c-16.6 0-30 13.4-30 30s13.4 30 30 30l185 0 0 185c0 16.6 13.4 30 30 30s30-13.4 30-30L542 530l185 0c16.6 0 30-13.4 30-30S743.6 470 727 470z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yuandian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 286.621926c-124.472919 0-225.378074 100.905154-225.378074 225.378074s100.905154 225.378074 225.378074 225.378074S737.378074 636.472919 737.378074 512 636.472919 286.621926 512 286.621926z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)