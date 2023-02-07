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

  // Charts with charts.js -- Deprecated
  // var colors =  [
  //     '#0063E2', // blue
  //     '#F6331C', // red
  //     '#EE93B5', // pink
  //     '#D7FB03', // lime
  //     '#000' // black
  // ];

  // const bar1 = document.getElementById('barChart').getContext('2d');
  // const barChart = new Chart(bar1, {
  //     type: 'bar',
  //     data: {
  //         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //         datasets: [{
  //             data: [12, 19, 3, 5, 2, 3],
  //             label: '# of Votes',
  //             backgroundColor: colors,
  //             borderColor: colors,
  //             borderWidth: 0
  //         }]
  //     },
  //     options: {
  //         scales: {
  //             y: {
  //                 beginAtZero: true
  //             }
  //         }
  //     }
  // });

  // const pie1 = document.getElementById('pieChart').getContext('2d');
  // const pieChart = new Chart(pie1, {
  //     type: 'pie',
  //     data: {
  //         labels: ['Everyone else', 'Women of color founders'],
  //         datasets: [{
  //             data: [99.5, 0.5,],
  //             backgroundColor: colors,
  //             borderColor: colors,
  //             borderWidth: 0
  //         }]
  //     },
  //     options: {

  //     }
  // });
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

// Charts with chart.js

// 'rgba(238, 147, 181, 1)',
//         'rgba(0, 99, 226, 1)',
//         'rgba(223, 248, 81, 1)',

function recordConsent() {
  var date = new Date()
  // One year from now
  date.setTime(date.getTime() + 365 * 24 * 3600 * 1000)
  var suffix = '; expires=' + date.toUTCString() + '; path=/'

  document.cookie =
    'cookie_consent_analytics=' +
    document.getElementById('cookie-consent-analytics').checked +
    suffix
  document.cookie = 'cookie_consent_cleared=true' + suffix

  gtag('consent', 'update', {
    analytics_storage: document.getElementById('cookie-consent-analytics')
      .checked
      ? 'granted'
      : 'denied',
  })
}

window.dataLayer = window.dataLayer || []
function gtag() {
  dataLayer.push(arguments)
}
gtag('consent', 'default', { ad_storage: 'denied' })
gtag('consent', 'default', {
  analytics_storage: 'denied',
  region: ['EU', 'UK'],
})

if (readCookie('cookie_consent_cleared')) {
  document.getElementById('cookie-consent').style.display = 'none'
  document.getElementById('cookie-consent-analytics').checked =
    readCookie('cookie_consent_analytics') == 'true'

  gtag('consent', 'update', {
    analytics_storage: document.getElementById('cookie-consent-analytics')
      .checked
      ? 'granted'
      : 'denied',
  })
}

gtag('js', new Date())
gtag('config', 'G-Q749X5MH40')

function readCookie(name) {
  var nameEq = name + '='
  var cookies = document.cookie.split(';')
  for (var i = 0; i < cookies.length; i++) {
    var c = cookies[i]
    while (c.charAt(0) == ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEq) == 0) return c.substring(nameEq.length, c.length)
  }
  return null
}
