;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-facebook" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.328704 3.997696C231.589888 3.997696 3.976192 231.611392 3.976192 512.350208c0 280.732672 227.612672 508.346368 508.352512 508.346368 280.732672 0 508.346368-227.612672 508.346368-508.346368C1020.674048 231.548928 793.061376 3.997696 512.328704 3.997696L512.328704 3.997696zM643.73248 512.2816l-83.303424 0.068608-0.062464 305.005568L446.050304 817.355776 446.050304 512.350208l-76.253184 0L369.79712 407.2448l76.253184-0.063488-0.124928-61.889536c0-85.7856 23.25504-137.954304 124.224512-137.954304l84.13184 0 0 105.162752-52.614144 0c-39.33184 0-41.237504 14.680064-41.237504 42.066944l-0.124928 52.615168 94.550016 0L643.73248 512.2816 643.73248 512.2816zM643.73248 512.2816"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-linkedin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.096993 1023.999982C229.361548 1023.999982 0 794.638434 0 511.096993 0 229.361548 229.361548 0 511.096993 0 794.638434 0 1023.999982 229.361548 1023.999982 511.096993 1023.999982 794.638434 794.638434 1023.999982 511.096993 1023.999982M368.423274 406.349199l-99.329804 0 0 319.66137 99.329804 0L368.423274 406.349199zM377.453256 310.631388c0-30.701939-23.477954-55.98589-59.597883-55.98589-36.119929 0-61.403879 23.477954-61.403879 55.98589 0 30.701939 23.477954 55.98589 59.597883 55.98589l0 0C353.975302 366.617277 377.453256 343.139324 377.453256 310.631388zM767.548487 549.022918c0-99.329804-55.98589-144.479715-126.419751-144.479715-57.791886 0-92.105818 30.701939-99.329804 52.373897l0-50.5679-111.971779 0c1.805996 27.089947 0 319.66137 0 319.66137L541.798932 726.010569l0-173.375658c0-9.029982 0-19.865961 1.805996-25.28395 7.223986-19.865961 23.477954-39.731922 54.179893-39.731922 39.731922 0 55.98589 28.895943 55.98589 72.239858l0 166.151673 113.777776 0L767.548487 549.022918z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-twitter3" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0zM768 380.8c0 6.4 0 12.8 0 16 0 172.8-131.2 374.4-374.4 374.4-73.6 0-144-22.4-201.6-57.6 9.6 0 19.2 3.2 32 3.2 60.8 0 118.4-22.4 163.2-57.6-57.6 0-105.6-38.4-121.6-89.6 9.6 0 16 3.2 25.6 3.2 12.8 0 22.4 0 35.2-3.2-60.8-12.8-105.6-64-105.6-128 0 0 0 0 0-3.2 19.2 9.6 38.4 16 60.8 16-35.2-22.4-57.6-64-57.6-108.8 0-25.6 6.4-48 19.2-67.2 64 80 160 131.2 272 137.6-3.2-9.6-3.2-19.2-3.2-28.8 0-73.6 57.6-131.2 131.2-131.2 38.4 0 70.4 16 96 41.6 28.8-6.4 57.6-16 83.2-32-9.6 32-32 57.6-57.6 73.6 25.6-3.2 51.2-9.6 76.8-19.2C812.8 339.2 793.6 361.6 768 380.8L768 380.8z"  ></path>' +
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