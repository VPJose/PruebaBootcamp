// Carousel
var owl = $('.owl-carousel');
owl.owlCarousel({
  margin: 10,
  loop: true,
  left: true,
  items: 1,
})

$('#btnMenu').click(function() {
  $('#menu').toggleClass('visible')
})

$('.close').click(function() {
  $('#menu').toggleClass('visible')
})