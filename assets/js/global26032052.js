// const scroll = new LocomotiveScroll({
//   el: document.querySelector('[data-scroll-container]'),
//   smooth: true
// });
  
  
  
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
