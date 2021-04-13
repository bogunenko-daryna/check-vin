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
    mySwiper.init();
  
  
   }

   
   

   $('.header__language-list a').on('click', function() {
   let el = $(this).data('language');
   $('.active-language').text(el);
   $('.header__language-list').removeClass('show');
   });

   $('.active-language').on('click', function() {
     $(this).next().addClass('show');
   })


   $(document).mouseup(function (e){
    var div = $('.header__language');
    if (!div.is(e.target)
      && div.has(e.target).length === 0) {
        $('.header__language-list').removeClass('show');
    }
  });

  $('.modal-btn').on('click', function() {
     $('.modal').addClass('show');
  });
  $('.modal-close').on('click', function() {
    $('.modal').removeClass('show');
 });
    
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
