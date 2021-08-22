$( document ).ready(function() {
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
      // $(".rating").rate();
      //   //or for example
      //   var options = {
      //       max_value: 5,
      //       step_size: 0.5,
      //   }
      //   $(".rating").rate(options);
});