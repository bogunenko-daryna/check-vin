import Headroom from 'headroom.js';
import Swiper from 'swiper/swiper-bundle';
export default {
  init() {
    var headroom  = new Headroom(document.querySelector('header'));
    headroom.init();

   if($('.slider-quotes').hasClass('slider-quotes')) {
    var mySwiper = new Swiper('.slider-quotes.swiper-container', {
      slidesPerView: 2,
      spaceBetween: 50,
      
      pagination: {
        el: '.swiper-pagination',
       
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

  
  
   }

   mySwiper.init();
   

    
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
