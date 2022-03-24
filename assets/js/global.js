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

