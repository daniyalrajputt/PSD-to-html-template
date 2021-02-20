// // Swiper Configuration
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 4,
  spaceBetween: 10,
  centeredSlides: true,
  freeMode: true,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    500: {
      slidesPerView: 1
    },
    700: {
      slidesPerView: 1.5
    }
  }
});

// var timeline = new TimelineLite();

// timeline
//   .to("#box1", 2, {
//     width: "0",
//     ease: Power4.easeIn,
//     delay: "0.5"
//   })
//   .to("#box2", 2, {
//     width: "0",
//     ease: Power3.easeOut,
//     delay: "0"
//   });











// var controller = new ScrollMagic.Controller();
// var tl = new TimelineMax();
// tl.staggerFrom(".swiper-slide", 1.25, {
//   scale: 0,
//   cycle: {
//     y: [-100, 100]
//   },
//   ease: Elastic.easeOut,
//   stagger: {
//     from: "center",
//     amount: 0.25
//   }
// });

// var scene = new ScrollMagic.Scene({
//   triggerElement: "#stage",
//   triggerHook: 0
// })
//   .addIndicators({
//     colorTrigger: "white",
//     colorStart: "white",
//     colorEnd: "white",
//     indent: 5
//   })
//   .setTween(tl)
//   .addTo(controller);
