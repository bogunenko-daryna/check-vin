import Headroom from 'headroom.js'

import 'bootstrap';

export default {
  init() {
   



    var headroom  = new Headroom(document.querySelector('header'));
    headroom.init();
    


//mobile menu
    $('.mobile-menu__close').click(function() {
      $('.mobile-menu').removeClass('open-mobile');
      $('.shadow').removeClass('show-shadow');
      $('body').removeClass('body-hidden');
    });
    $('.header__burger').click(function() {
      $('.mobile-menu').addClass('open-mobile');
      $('.shadow').addClass('show-shadow');
      $('body').addClass('body-hidden');
    });

    
    //modal
  $('.sign-in-out').click(function (){
    $('.wrapper').addClass('open');
    $('.shadow').show();
  });
    $('.close').click(function (){
      $('.wrapper').removeClass('open');
      $('.shadow').hide();
    });

   
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
