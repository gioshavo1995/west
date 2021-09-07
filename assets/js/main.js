$( document ).ready(function() {
  // open search
  $(document).on('click', '.search', function(){
    $('.search_wrap').addClass('active');
  });
  $(document).on('click', '.search_back', function(){
    $('.search_wrap').removeClass('active');
  });
  // main page sliders
    const afrodable = new Swiper('.afordable_swiper', {
        slidesPerView: 1.4,
        spaceBetween: 16,
        breakpoints: {
          // when window width is >= 320px
          767: {
            slidesPerView: 3,
            spaceBetween: 16,
            touchRatio: 0,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 16,
            touchRatio: 0
          },
          1270: {
            slidesPerView: 5,
            spaceBetween: 16,
            touchRatio: 0
          },
        }
      });
      const other = new Swiper('.other_swiper', {
        slidesPerView: 1.4,
        spaceBetween: 16,
        breakpoints: {
          // when window width is >= 320px
          767: {
            slidesPerView: 3,
            spaceBetween: 16,
            touchRatio: 0,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 16,
            touchRatio: 0,
          },
        }
      });
      const testimonials = new Swiper('.testimonials_swiper', {
        slidesPerView: 1.4,
        spaceBetween: 16,
        touchRatio: 1,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          // when window width is >= 320px
          767: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
          1270: {
            slidesPerView: 5,
            spaceBetween: 16
          },
        }
      });
      const blog = new Swiper('.blog_swiper', {
        slidesPerView: 1.4,
        spaceBetween: 16,
        breakpoints: {
          // when window width is >= 320px
          767: {
            slidesPerView: 3,
            spaceBetween: 16,
            touchRatio: 0,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 16,
            touchRatio: 0
          },
        }
      });
      const search = new Swiper('.search_swiper', {
        slidesPerView: 3.5,
        spaceBetween: 24,
        breakpoints: {
          // when window width is >= 320px
          767: {
            slidesPerView: 7,
            spaceBetween: 24,
          },
        }
      });
      const similar = new Swiper('.similar_swiper', {
        slidesPerView: 1.4,
        spaceBetween: 16,
        breakpoints: {
          // when window width is >= 320px
          767: {
            slidesPerView: 3,
            spaceBetween: 16,
            touchRatio: 0,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 16,
            touchRatio: 0
          },
          1270: {
            slidesPerView: 4,
            spaceBetween: 16,
            touchRatio: 0
          },
        }
      });
      // $(".rating").rate();
      //   //or for example
      //   var options = {
      //       max_value: 5,
      //       step_size: 0.5,
      //   }
      //   $(".rating").rate(options);

      // scroll socials
      $(window).on("scroll load", function() {
        if($(window).scrollTop() > 550) {
                $('.scroll_social').removeClass('d-none');
                $('.scroll_social').addClass('d-flex');
            }else {
                $('.scroll_social').addClass('d-none');
                $('.scroll_social').removeClass('d-flex');
            }
        });
        $('.scroll_social .open').click(function(){
          $(this).addClass('d-none');
          $(this).removeClass('d-flex');
          $(this).next().removeClass('d-none');
          $(this).next().addClass('d-flex');
          $('.social_items').addClass('active');
        });
        $('.scroll_social .close').click(function(){
          $(this).addClass('d-none');
          $(this).removeClass('d-flex');
          $(this).prev().removeClass('d-none');
          $(this).prev().addClass('d-flex');
          $('.social_items').removeClass('active');
          $('.social_items').addClass('hide');
        });
        // mobile menu opener
        $('.mobile_menu').click(function(){
          $(this).toggleClass('active');
          $('body').toggleClass('menu_open');
          $('.mobile_drop').toggleClass('active');
        });
        // product drops
        $('.drop_body').hide();
        $('.drop_head').click(function(){
          $(this).toggleClass('active');
          $(this).next().slideToggle();
        });
});