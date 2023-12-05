// Import ScrollMagic and GSAP
// import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import ScrollMagic from 'scrollmagic';
import { Tween } from 'gsap';
console.log("SUCA")
// Create a ScrollMagic controller
// Create a ScrollMagic controller
var controller = new ScrollMagic.Controller();
 console.log(controller);
// Create a TweenMax animation
// const tween = new Tween('.animate-me', {
//   opacity: 0,
//   y: 50,
//   duration: 225,
// });

const scene = new ScrollMagic.Scene({
  triggerElement: '.trigger-element',
  triggerHook: 0.8,

})
  .setClassToggle('.trigger-element', 'show')
  // .addIndicators({ name: 'pin scene', colorEnd: '#6c1b1b' })
  .on('enter', () => {
    console.log('Scene entered');
  })
  .addTo(controller);
  console.log(document.getElementsByClassName('trigger-element'));

