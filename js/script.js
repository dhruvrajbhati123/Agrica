$('#s2').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  mouseDrag:false,  
  dots:false,
  smartSpeed:500,
  autoplay:1000,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  items:1
})

$('#s3').owlCarousel({
  loop:true,
  margin:30,
  dotsEach:true,
  nav:false,
  items:3
  
})
$('#s4').owlCarousel({
  loop:true,
  margin:30,
  dotsEach:false,
  nav:false,
  dots:false,
  items:2
  
})
$('#s5').owlCarousel({
  loop:true,
  margin:30,
  
  dotsEach:false,
  nav:false,
  dots:false,
  items:1
})


$('#s1').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    mouseDrag:false,
    smartSpeed:500,
    autoplay:3000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items:1,
    navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>']
})

$(window).scroll(function(){
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();

  if (scroll >= 700) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});


document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
     let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
       current += increment;
       obj.textContent = current;
       if (current == end) {
        clearInterval(timer);
       }
      }, step);
    }
    counter("count3", 0, 25, 3000);
});




var owl = $('.owl-carousel');
owl.owlCarousel();
// Listen to owl events:
owl.on('changed.owl.carousel', function(event) {
 
          new WOW().init();

})

wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
)
  wow.init();


//   $('#s2').owlCarousel({
//     loop:true,
//     // margin:10,
//     nav:true,
//     items:1
// })



