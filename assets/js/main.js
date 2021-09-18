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
      const prod_swipe = new Swiper('.prod_swipe', {
        slidesPerView: 1,
        touchRatio: 1,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
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
          $('.bottom_availability ').toggleClass('menu_open');
        });
        // product drops
        $('.drop_body').hide();
        $('.drop_head').click(function(){
          $(this).toggleClass('active');
          $(this).next().slideToggle();
        });
        $(".calendar").flatpickr({
          inline: true
        });
        $(".modal_button .dropdown-menu").click(function(e){
          e.stopPropagation();
       })
       $("#calendar .next").click(function(e){
        $("body").addClass('modal-open ');
        $("#calendar").modal('hide');
        $("#guest").modal('show');
        
     })
     $("#guest .back").click(function(e){
      $("body").addClass('modal-open');
      $("#calendar").modal('show');
      $("#guest").modal('hide');
      
   })
   $("#guest .next").click(function(e){
    $("body").addClass('modal-open');
    $("#guest").modal('hide');
    $("#availability").modal('show');
 })
 $("#availability .back").click(function(e){
  $("#guest").modal('show');
  $("#availability").modal('hide');
})
});


function isOnScreen(elem) {
	// if the element doesn't exist, abort
	if( elem.length == 0 ) {
		return;
	}
	var $window = jQuery(window)
	var viewport_top = $window.scrollTop()
	var viewport_height = $window.height()
	var viewport_bottom = viewport_top + viewport_height
	var $elem = jQuery(elem)
	var top = $elem.offset().top
	var height = $elem.height()
	var bottom = top + height

	return (top >= viewport_top && top < viewport_bottom) ||
	(bottom > viewport_top && bottom <= viewport_bottom) ||
	(height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
}

if( isOnScreen( jQuery( 'footer' ) ) ) { /* Pass element id/class you want to check */
			$(".bottom_availability").addClass("menu_open");
}

jQuery( document ).ready( function() {
	window.addEventListener('scroll', function(e) {
		if( isOnScreen( jQuery( 'footer' ) ) ) { /* Pass element id/class you want to check */
			$(".bottom_availability").addClass("menu_open");
 		} else {
			 $(".bottom_availability").removeClass("menu_open");
		 }	
	});
});

// modals
$('body').on('hidden.bs.modal', function () {
  if($('.modal.show').length > 0)
  {
      $('body').addClass('modal-open');
  }
});


// contact drops
$('.contact_drops .drop_item .inner_body').hide();

$('.contact_drops .drop_item .drop_title').click(function(){
  $(this).toggleClass('active');
  $(this).next().slideToggle();
})
$('.contact_drops .drop_item .inner_body').click(function(e){
  e.stopPropagation();
})
$('.contact_drops .drop_item .inner_title').click(function(e){
  e.stopPropagation();
  $(this).toggleClass('active');
  $(this).next().slideToggle();
})