$(document).ready(function () {
  // Off Canvas Navigation
  // note:
  //    - menu items without children must be
  //    referenced directly (to close the nav on click)
  //    conversely, if they get children the direct ref
  //    must be removed (otherwise nav will close before
  //    children are available)
  //    ex. "nav a.nav-section-4"
  $('.burger, .overlay, nav a.nav-parent').click(function () {
    $('nav, .overlay, .burger').toggleClass('active')
  })

  // Scrollspy
  // source: https://codepen.io/acarlie/pen/LKmORw?editors=1010
  var sectionIds = $('nav a')

  $(document).scroll(function () {
    sectionIds.each(function () {
      var container = $(this).attr('href')
      var containerOffset = $(container).offset().top
      var containerHeight = $(container).outerHeight()
      var containerBottom = containerOffset + containerHeight
      var scrollPosition = $(document).scrollTop()

      if (
        scrollPosition < containerBottom - 20 &&
        scrollPosition >= containerOffset - 20
      ) {
        $(this).addClass('active')
      } else {
        $(this).removeClass('active')
      }
    })
  })

  // SWIPER SLIDER
  // more info: https://swiperjs.com/
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    //direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
  })
}) // end of document ready

// progress bar for scroll
const scrollProgress = () => {
  return {
    init() {
      window.addEventListener('scroll', () => {
        let winScroll =
          document.body.scrollTop || document.documentElement.scrollTop
        let height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight
        this.percent = Math.round((winScroll / height) * 100)
      })
    },
    circumference: 30 * 2 * Math.PI,
    percent: 0,
  }
}

function createCookie(name, value, days) {
  var expires = ''
  if (days) {
    var date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = '; expires=' + date.toUTCString()
  }
  document.cookie = name + '=' + value + expires + '; path=/'
}
function readCookie(name) {
  var nameEQ = name + '='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) == ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}
function eraseCookie(name) {
  createCookie(name, '', -1)
}

if (readCookie('cookie-notice-option') == 'true') {
  function loadScriptAsync(scriptSrc, callback) {
    if (typeof callback !== 'function') {
      throw new Error('Not a valid callback for async script load')
    }
    var script = document.createElement('script')
    script.onload = callback
    script.src = scriptSrc
    document.head.appendChild(script)
  }

  /* This is the part where you call the above defined function and "calls back" your code which gets executed after the script has loaded */

  loadScriptAsync(
    'https://www.googletagmanager.com/gtag/js?id=G-Q749X5MH40',
    function () {
      window.dataLayer = window.dataLayer || []
      function gtag() {
        dataLayer.push(arguments)
      }
      document.getElementById('c-banner').style.display = 'none'
      gtag('js', new Date())
      gtag('config', 'G-Q749X5MH40', { anonymize_ip: true })
    }
  )
} else if (readCookie('cookie-notice-option') == 'false') {
  document.getElementById('c-banner').style.display = 'none'
}

document
  .getElementById('c-banner-accept')
  .addEventListener('click', function () {
    createCookie('cookie-notice-option', 'true', 31)
    document.getElementById('c-banner').style.display = 'none'
    location.reload()
  })

document.getElementById('c-banner-deny').addEventListener('click', function () {
  createCookie('cookie-notice-option', 'false', 31)
  document.getElementById('c-banner').style.display = 'none'
  location.reload()
})
