// const scroll = new LocomotiveScroll({
//   el: document.querySelector('[data-scroll-container]'),
//   smooth: true
// });

var swiper = new Swiper(".gallery-carousel", {
    slidesPerView: 1.25,
    centeredSlides: true,
    spaceBetween: 0,
    initialSlide: 8,
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

  function copy(that){
var inp =document.createElement('input');
document.body.appendChild(inp)
inp.value =that.textContent
inp.select();
document.execCommand('copy',false);
inp.remove();
}

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


const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smoothMobile: false
});
scroll.destroy();
document.addEventListener("DOMContentLoaded", function(event) { 
    scroll.init();
});

const $links = document.querySelectorAll('.btn--magneto')
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


const dntBtn = document.querySelectorAll('.dtnToggle');
const dntClose = document.querySelector('.dtnClose');
const dntCover = document.querySelector('.donate--cover');
var page = document.querySelector('html');


dntBtn.forEach((function (o) {
  o.addEventListener('click', (function () {
    t1.isActive() || (page.classList.remove('no-scroll'), dntCover.classList.remove('is-show'), t1.reversed(!t1.reversed()))
  }));
    }))

dntClose.addEventListener('click', (function () {
  t1.isActive() || (page.classList.remove('no-scroll'), dntCover.classList.remove('is-show'), scroll.start(), t1.reversed(!t1.reversed()))
}));
dntCover.addEventListener('click', (function () {
  t1.isActive() || (page.classList.remove('no-scroll'), dntCover.classList.remove('is-show'), scroll.start(), t1.reversed(!t1.reversed()))
}));
const t1 = gsap.timeline();
t1.fromTo('.donate', 0.35, {
  y: '-100%',
  ease: 'power4.easeOut'
}, {
  y: '0%',
  onComplete: function () {
    page.classList.add('no-scroll')
    dntCover.classList.add('is-show')
    scroll.stop();
  }
}).staggerFromTo('.donate-el', 0.35, {
  opacity: 0,
  y: '-25px'
}, {
  opacity: 1,
  y: '0%',
  stagger: 0.075,
  delay: 0.275
})
t1.reversed(!0);



const openNav = document.querySelector('#openNav');

openNav.addEventListener('click', (function () {
    t2.isActive() || (t2.reversed(!t2.reversed()))
  }));

const t2 = gsap.timeline();
t2.fromTo('.header-nav', 0.35, {
  scaleY: '0',
  ease: 'power4.easeOut'
}, {
  scaleY: '1',
  onComplete: function () {
    
  }
}).staggerFromTo('.header-nav__list-item', 0.35, {
  opacity: 0,
  y: '-25px'
}, {
  opacity: 1,
  y: '0%',
  stagger: 0.075,
  delay: 0.275
})
t2.reversed(!0);