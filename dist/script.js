// Import ScrollMagic and GSAP
// import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import ScrollMagic from 'scrollmagic';
import gsap from 'gsap';
console.log('SUCA');

var controller = new ScrollMagic.Controller();
console.log(controller);

const scene6 = new ScrollMagic.Scene({
  triggerElement: '.section4',
})
  .setClassToggle('.section4_container-text', 'show')
  .addTo(controller);
const scene5 = new ScrollMagic.Scene({
  triggerElement: '.section4',
})
  .setClassToggle('.section4_container-images', 'show')
  .addTo(controller);

const scene4 = new ScrollMagic.Scene({
  triggerElement: '.section3_container-images-png',
})
  .setClassToggle('.section3_container-images-png', 'show')
  .addTo(controller);

const scene3 = new ScrollMagic.Scene({
  triggerElement: '.section3_container-images-circles',
})
  .setClassToggle('.section3_container-images-circles2', 'show')
  .addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: '.section3_container-images-png',
})
  .setClassToggle('.section3_container-images-circles', 'show')
  .addTo(controller);

const scene = new ScrollMagic.Scene({
  triggerElement: '.section3_container-header',
  triggerHook: 0.8,
})
  .setClassToggle('.section3_container-header', 'show')
  // .addIndicators({ name: 'pin scene', colorEnd: '#6c1b1b' })
  .on('enter', () => {
    console.log('Scene entered');
  })
  .addTo(controller);
console.log(document.getElementsByClassName('trigger-element'));

//GSAP animation for bordercircles

console.log(gsap);
const timeline = gsap.timeline({ yoyo: true });
timeline.to('.section4_container-images-circle', {
  duration: 2,
  opacity: 0,
  transform: 'translate(-50%, -50%) scale(.5)',
  ease: 'bounce',
  stagger: 0.25,
});
timeline.to('.section4_container-images-border', {
  duration: 0.5,
  strokeDashoffset: 0,
  ease: 'power2.inOut',
  stagger: 0.5,
});
timeline.to(
  '.section4_container-images-border',
  {
    duration: 2,
    strokeDashoffset: -301.592,
    stagger: 1,
  },
  '<'
);
timeline.from(
  '.section4_container-images-circle',
  {
    duration: 2,
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1.5)',
    ease: 'bounce',
    stagger: 0.25,
  },
  '-=3.5'
);

timeline.repeat(-1);
timeline.play();

