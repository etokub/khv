// const scroll = new LocomotiveScroll({
//   el: document.querySelector('[data-scroll-container]'),
//   smooth: true
// });
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.35,
    centeredSlides: true,
    spaceBetween: 5,
    initialSlide: 0,
    slideToClickedSlide: true,
    grabCursor: true,
    parallax: true,
    loop: true,
    breakpoints: {
        1024: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
      },
  });

  var swiper = new Swiper(".team-carousel", {
    slidesPerView: "1.25",
    spaceBetween: 30,
    centeredSlides: false,
    grabCursor: true,
    navigation: {
        nextEl: "#team-carousel--next",
        prevEl: "#team-carousel--prev",
    },
    breakpoints: {
        810: {
            slidesPerView: "auto",
            spaceBetween: 30,
            centeredSlides: true,
        },
        1280: {
            slidesPerView: "auto",
            spaceBetween: 30,
            centeredSlides: true,
        },
      },
  });
  
  
  const l = document.querySelector('.bd-l'),
  r = document.querySelector('.bd-r'),
  b = document.querySelector('.btn--double');

    l.addEventListener('mouseenter', (function () {
    b.classList.add('on-left')
    b.classList.remove('on-right')
    })),
    l.addEventListener('mouseleave', (function () {
 
    }))

    r.addEventListener('mouseenter', (function () {
        b.classList.add('on-right')
        b.classList.remove('on-left')
        })),
        r.addEventListener('mouseleave', (function () {
        // b.classList.remove('on-left')
        }))

//   s.forEach((function (o) {
//     o.addEventListener('mouseenter', (function () {
//       e.classList.add('play'),
//       follower.classList.add('play')
//     })),
//     o.addEventListener('mouseleave', (function () {
//       e.classList.remove('play'),
//       follower.classList.remove('play')
//     }))
//   }))

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  if (document.querySelector(".carousel")) {
      let slideshowPage = document.querySelector(".carousel");
      if (slideshowPage.classList.contains("carousel")) {
          let slides = slideshowPage.querySelectorAll(".mySlides");
          if (n > slides.length) {
          slideIndex = 1
          };
          if (n < 1) {
          slideIndex = slides.length
          };
      for (i = 0; i < slides.length; i++) {
          slides[i].style.opacity = "0";
      };
      slides[slideIndex-1].style.opacity = "1";
      }
  }
}


setInterval(function() {
plusSlides(1)
// console.log('change')
}, 2000);


// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true,
//     smoothMobile: false
// });
// scroll.destroy();
// document.addEventListener("DOMContentLoaded", function(event) { 
//     scroll.init();
// });

const $links = document.querySelectorAll('.btn--circle')
const targetLink = { centerX : 0, centerY : 0 }

const mouseMove = ({ clientX, clientY, target }) => {
	const x = (clientX - targetLink.centerX) * .15
	const y = (clientY - targetLink.centerY) * .15
	
	gsap.to(target, { x, y })
}

const mouseover = ({ target }) => {
	const { left, top, width, height } = target.getBoundingClientRect()
	
	targetLink.centerX = left + (width / 2)
	targetLink.centerY = top  + (height / 2)
	
	target.addEventListener('mousemove', mouseMove)
}

const mouseleave = ({ target }) => {
	target.removeEventListener('mousemove', mouseMove)
	
	targetLink.centerX = 0
	targetLink.centerY = 0
	
	gsap.killTweensOf(target)
	gsap.to(target, { x: 0, y: 0, duration: .2 })
}

$links.forEach($link => {
	$link.addEventListener('mouseover', mouseover)
	$link.addEventListener('mouseleave', mouseleave)
})