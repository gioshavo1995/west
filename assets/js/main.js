$( document ).ready(function() {

    $('.search').click(function(){
      $('.search_wrap').addClass('active');
    });
      $('.search_back').click(function(){
        $('.search_wrap').removeClass('active');
  });
    const afrodable = new Swiper('.afordable_swiper', {
        slidesPerView: 5,
        spaceBetween: 16,
        touchRatio: 0,
      });
      const other = new Swiper('.other_swiper', {
        slidesPerView: 4,
        spaceBetween: 16,
        touchRatio: 0,
      });
      const testimonials = new Swiper('.testimonials_swiper', {
        slidesPerView: 5,
        spaceBetween: 16,
        touchRatio: 1,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
      const blog = new Swiper('.blog_swiper', {
        slidesPerView: 4,
        spaceBetween: 16,
        touchRatio: 0,
      });
      const search = new Swiper('.search_swiper', {
        slidesPerView: 7,
        spaceBetween: 16,
      });
      // $(".rating").rate();
      //   //or for example
      //   var options = {
      //       max_value: 5,
      //       step_size: 0.5,
      //   }
      //   $(".rating").rate(options);

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
});