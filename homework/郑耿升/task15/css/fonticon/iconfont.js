;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M353.024 831.808c-35.36 0-64 28.64-64 64s28.64 64 64 64 64-28.64 64-64S388.416 831.808 353.024 831.808L353.024 831.808zM801.024 831.808c-35.36 0-64 28.64-64 64s28.64 64 64 64 64-28.64 64-64S836.416 831.808 801.024 831.808L801.024 831.808zM937.312 188.48C920.96 170.016 898.496 160 874.048 160L232.864 160 230.592 146.976C224.992 100.416 184 64 137.28 64L97.024 64c-17.696 0-32 14.304-32 32s14.304 32 32 32L137.28 128c13.92 0 28.128 12.672 30.016 28.256l30.912 178.496L252.48 716.864C258.112 763.424 298.656 800 344.768 800l520.256 0c17.696 0 32-14.304 32-32s-14.304-32-32-32L344.768 736c-13.632 0-27.04-12.608-28.832-27.456l-5.312-37.344 507.712-31.392c46.08 0 86.624-36.512 92.064-81.376l50.432-288.352C964.576 239.264 956 209.568 937.312 188.48z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-pc" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M0 0 1024 0 0 0Z"  ></path>' +
    '' +
    '<path d="M0 963.776 1024 963.776 0 963.776Z"  ></path>' +
    '' +
    '<path d="M0 903.488 1024 903.488 0 903.488Z"  ></path>' +
    '' +
    '<path d="M0 843.264 1024 843.264 0 843.264Z"  ></path>' +
    '' +
    '<path d="M0 782.976 1024 782.976 0 782.976Z"  ></path>' +
    '' +
    '<path d="M0 722.752 1024 722.752 0 722.752Z"  ></path>' +
    '' +
    '<path d="M0 662.528 1024 662.528 0 662.528Z"  ></path>' +
    '' +
    '<path d="M0 602.24 1024 602.24 0 602.24Z"  ></path>' +
    '' +
    '<path d="M0 542.016 1024 542.016 0 542.016Z"  ></path>' +
    '' +
    '<path d="M0 481.984 1024 481.984 0 481.984Z"  ></path>' +
    '' +
    '<path d="M0 421.76 1024 421.76 0 421.76Z"  ></path>' +
    '' +
    '<path d="M0 361.472 1024 361.472 0 361.472Z"  ></path>' +
    '' +
    '<path d="M0 301.248 1024 301.248 0 301.248Z"  ></path>' +
    '' +
    '<path d="M0 241.024 1024 241.024 0 241.024Z"  ></path>' +
    '' +
    '<path d="M0 180.736 1024 180.736 0 180.736Z"  ></path>' +
    '' +
    '<path d="M0 120.512 1024 120.512 0 120.512Z"  ></path>' +
    '' +
    '<path d="M0 60.224 1024 60.224 0 60.224Z"  ></path>' +
    '' +
    '<path d="M0 1024 1024 1024 0 1024Z"  ></path>' +
    '' +
    '<path d="M0 0 0 1024 0 0Z"  ></path>' +
    '' +
    '<path d="M963.776 0 963.776 1024 963.776 0Z"  ></path>' +
    '' +
    '<path d="M903.488 0 903.488 1024 903.488 0Z"  ></path>' +
    '' +
    '<path d="M843.264 0 843.264 1024 843.264 0Z"  ></path>' +
    '' +
    '<path d="M782.976 0 782.976 1024 782.976 0Z"  ></path>' +
    '' +
    '<path d="M722.752 0 722.752 1024 722.752 0Z"  ></path>' +
    '' +
    '<path d="M662.528 0 662.528 1024 662.528 0Z"  ></path>' +
    '' +
    '<path d="M602.24 0 602.24 1024 602.24 0Z"  ></path>' +
    '' +
    '<path d="M542.016 0 542.016 1024 542.016 0Z"  ></path>' +
    '' +
    '<path d="M481.984 0 481.984 1024 481.984 0Z"  ></path>' +
    '' +
    '<path d="M421.76 0 421.76 1024 421.76 0Z"  ></path>' +
    '' +
    '<path d="M361.472 0 361.472 1024 361.472 0Z"  ></path>' +
    '' +
    '<path d="M301.248 0 301.248 1024 301.248 0Z"  ></path>' +
    '' +
    '<path d="M241.024 0 241.024 1024 241.024 0Z"  ></path>' +
    '' +
    '<path d="M180.736 0 180.736 1024 180.736 0Z"  ></path>' +
    '' +
    '<path d="M120.512 0 120.512 1024 120.512 0Z"  ></path>' +
    '' +
    '<path d="M60.224 0 60.224 1024 60.224 0Z"  ></path>' +
    '' +
    '<path d="M1024 0 1024 1024 1024 0Z"  ></path>' +
    '' +
    '<path d="M909.952 174.272 111.744 174.272c-36.736 0-66.496 27.136-66.496 60.544l0 484.16c0 33.472 29.76 60.544 66.496 60.544l328.64 0 0 72.768L358.848 852.288l0 51.2 302.656 0 0-51.2L580.032 852.288l0-72.768 329.856 0c36.672 0 68.8-27.072 68.8-60.544L978.688 234.816C978.752 201.344 946.624 174.272 909.952 174.272zM905.472 663.744 118.592 663.744 118.592 249.344l786.944 0L905.536 663.744z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-lock" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M334.463 459.012h355.073v-133.152q0-73.5-52.018-125.519t-125.519-52.018-125.519 52.018-52.018 125.519v133.152zM911.458 525.589v399.458q0 27.74-19.44 47.136t-47.136 19.44h-665.761q-27.74 0-47.136-19.44t-19.44-47.136v-399.458q0-27.74 19.44-47.136t47.136-19.44h22.192v-133.152q0-127.605 91.565-219.124t219.124-91.565 219.124 91.565 91.565 219.124v133.152h22.192q27.74 0 47.136 19.44t19.44 47.136z"  ></path>' +
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